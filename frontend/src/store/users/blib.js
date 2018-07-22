// #include <stdio.h>
// #include <pwd.h>

/*
 *	B functions and utilities
 */

// #include <ctype.h>
// #include "System.h"

const lowercase = str => str.toLowerCase();
const uppercase = str => str.toUpperCase();
const trim = str => str.trim();
const any = (ch, str) => str.indexOf(ch)


function scan (s_out, s_in, start, skips, stops) {
    let in_id = 0;
    let in_base = s_in;
    /*
     * char *sy_ot=out;
     * printf("Scan(%s ->%d %d %s %s",in,out,start,skips,stops);
     */
    if (s_in.length < start) return s_out;
    in_id += start;

    while (s_in[in_id] && skips.indexOf(s_in[in_id])) in_id++;

    if (!s_in[in_id]) return s_out;

    while (s_in[in_id] && !stops.indexOf(s_in[in_id])) {
        s_out += s_in[in_id];
        in_id++;
    }
    /*
     * printf(" : Outputting %s\n",sy_ot);
     */
    return [s_out, (in_id - in_base)];
}


function getstr(filename, st) {
    // extern char *strchr();
    if (!filename.fgets(st,255)) return 0;
    if (st.indexOf('\n')) st[st.indexOf('\n')] = 0;
    return st;
}


const addchar = (str, ch) => str + ch;
const numarg = str => int(str);


/* Unknown code needed here */
const sbar = () => -1;


function f_listfl (name, file) {
    let a = name.fopen("r");
    let x = "";
    if (!a) {
        console.error("[Cannot find file ->", name, " ]");
    } else {
        while (a.fgets(x, 127)) file.fprintf("%s", x);
    }
}


function sec_read (unit, block, pos, len) {
    unit.fseek(pos * 64 * 4, 0);
    return unit.fread(len * 4, 1);
}


function sec_write (unit, block, pos, len) {
    unit.fseek(pos * 64 * 4, 0);
    unit.fwrite(block, len * 4, 1);
}