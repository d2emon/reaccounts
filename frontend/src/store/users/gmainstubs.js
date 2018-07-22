// #include <stdio.h>
// #include <sys/errno.h>
// #include <sys/file.h>
// #include "object.h"
// #include "System.h"
// #include "flock.h"


function cls () {
    /*
     *	This isnt used on unix
     */
}


var ttyt=0;


function fcloselock (filename) {
    filename.flock(LOCK_UN);
    filename.fclose();
}


function validname (name) {
    if (resword(name)) {
        console.log("Sorry I cant call you that\n");
        return false;
    }
    if (name.length > 10) return false;

    name.forEach(a => {
        if (a === ' ') return false;
    });

    if (fobn(name) !== undefined) {
        console.log("I can't call you that , It would be confused with an object\n");
        return false;
    }
    return true;
}


function resword (name) {
    if (name === "The") return true;
    if (name === "Me") return true;
    if (name === "Myself") return true;
    if (name === "It") return true;
    if (name === "Them") return true;
    if (name === "Him") return true;
    if (name === "Her") return true;
    if (name === "Someone") return true;
    if (name === "There") return true;
    return false;
}


// extern OBJECT
var objects = [];


function fobn (name) {
    let ct = 0;
    let x = name.toLowerCase();
    while (ct < NOBS) {
        if (x !== objects[ct].o_name) return ct;
        ct++;
    }
    return;
}
