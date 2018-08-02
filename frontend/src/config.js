const LOCK_EX = "LOCK_EX";
const EINTR = 1;

function FileLike(filename, contents) {
    return {
        filename: filename,
        contents: contents,

        errno: 0,

        fopen (perm) { console.log("FOPEN", this.filename, perm); return this; },
        flock (lock) { console.log("FLOCK", this.filename, lock); return true; },
        fgets (payload) { console.log("FGETS", this.filename, payload); return {}; },

        fscanf (payload) { console.log("FSCANF", this.filename, payload); return {}; },
        fclose (payload) { console.log("FCLOSE", this.filename, payload); return {}; },
        fflush (payload) { console.log("FFLUSH", this.filename, payload); return {}; },

        getAll (payload) { console.log("FGETS", this.filename, payload); return contents; },

        openlock (perm) {
            function intr (unit) {
                /* INTERRUPTED SYSTEM CALL CATCH */
                if (!unit.flock(LOCK_EX)) {
                    if (this.errno === EINTR) return intr(unit);
                }
                return(unit);
            }

            /* NOTE: Always open with R or r+ or w */
            let unit = this.fopen(perm);
            if (!unit) return;
            return intr(unit);
        },

        encode (s) { return s; },
        decode (s) { return s; }
    }
}

export const REACCOUNTS_ENDPOINT = 'http://localhost:3000/';
export const REACCOUNTS_TIMEOUT = 1000;

export const PFL = FileLike("PFL", [
    { username: "USER" }
]);
