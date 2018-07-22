function FileLike(filename) {
    return {
        filename: filename,
        fopen (payload) { console.log("FOPEN", payload); return this; },
        fscanf (payload) { console.log("FSCANF", payload); return {}; },
        fclose (payload) { console.log("FCLOSE", payload); return {}; },
        fflush (payload) { console.log("FFLUSH", payload); return {}; }
    }
}


export const HOST_MACHINE = "HOST MACHINE";
export const EXE = "EXE";
export const RESET_N = FileLike("RESET_N");
export const MOTD = "MOTD";
export const BAN_FILE = [];


