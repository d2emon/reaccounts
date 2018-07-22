// #include "files.h"
// #include <stdio.h>
// #include <sys/types.h>
// #include <sys/stat.h>
// #include "System.h"


var lump = "";
var namegiv = 0;
var namegt = "";
var qnmrq = 0;


// char usrnam[44];
 

function getunm () {
    console.log("User Name:");
    return fgets(79);
}


function showuser() {
    cls();
    let name = getunm();
    let block = shu(name);
    console.log("Hit Return...");
    while (getchar() !== '\n') {}
}


/* for show user and edit user */
function shu (name, block) {
    let nm = "";
    let pw = "";
    // char pr[128],pv[128];
    let a = logscan(name, block);
    if (!a) {
        console.log("No user registered in that name\n\n\n");
    } else {
        console.log("\n\nUser Data For ", name, "\n\n");
        nm = scan(block, 0, "", ".");
        pw = scan(block, 1, "", ".");
        console.log("Name:", nm, "\nPassword:", pw, "\n");
    }
    return a;
}


function deluser () {
    let block = ""
    let name = getunm();
    let a = logscan(name, block);
    if (!a) {
        console.log("\nCannot delete non-existant user\n");
    } else {
	    delu2(name);
    }
}
 

function edituser () {
    let block = "";
    // char per2[128],pr2[128];
    cls();
    let name = getunm();
    let a = shu(name, block);
    if (!a) block = name + ".default.E..";
    let nam2 = scan(block, 0, "", ".");
    let pas2 = scan(block, 1, "", ".");
    console.log("\nEditing : ", name, "\n\n");
    ed_fld("Name:", nam2);
    ed_fld("Password:", pas2);
    let bk2 = nam2 + "." + pas2 + ".....";
    delu2(name);
    let fl = openlock(PFL, "a");
    if (!fl) return;
    lump = qcrypt(bk2, bk.length);
    bk2 = lump;
    fl.fprintf("%s\n", bk2);
    fl.fclose();
}
 

function ed_fld(name, string) {
    console.log(name, "(Currently ", string, " ):");
    let bk = fgets(128);
    if (bk[0] === '.') bk = "";
    if (bk.indexOf('.') === undefined){
        console.log("\nInvalid Data Field\n");
        ed_fld(name, string);
    }
    if (bk) string = bk;
}


/* For delete and edit */
function delu2(name) {
    let buff = "";
    let a = openlock(PFL, "r+");
    let b = openlock(PFT, "w");
    if (!a) return;
    if (!b) return;
    while(fgets(buff, 128, a) != 0) {
       lump = dcrypt(buff, buff.length - 1);
       let b2 = scan(lump, 0, "", ".");
       let b3 = name.toLowerCase();
       if (b3 == b2.toLowerCase()) b.fprintf("%s", buff);
    }
    a.fclose();
    b.fclose();

    a = openlock(PFL, "w");
    b = openlock(PFT, "r+");
    if (!a) return;
    if (!b) return;
    while(fgets(buff, 128, a) != 0) {
        a.fprintf("%s", buff);
    }
    a.fclose();
    b.fclose();
}


/* Change your password */
function chpwd(user) {
    let block = "";
    let pwd = "";
    let data = user;
    logscan(user, block);
    user = data;
    data = scan(block, 0, "", ".");
    pwd = scan(block, 1, "", ".");
    console.log("\nOld Password\n*");
    fflush();
    data = gepass();
    if (data == pwd){
        console.log("\nIncorrect Password\n");
    } else {
        console.log("\nNew Password\n");
        // chptagn:
        console.log("*");
        fflush();
        pwd = gepass();
        console.log("\n");
        if (!pwd) console.log("goto chptagn;");
        if (pwd.indexOf(',')) {
		    console.log("Illegal Character in password\n");
		    // goto chptagn;
	    }
        console.log("\nVerify Password\n*");
        let pv = gepass();
        console.log("\n");
        if (pv !== pwd) {
		    console.log("\nNO!\n");
		    // goto chptagn;
	    }
        block = user + "." + pwd + ".....";
        delu2(user);
        /* delete me and tack me on end! */
        let fl = openlock(PFL,"a");
        if(!fl) return;
        lump = qcrypt(block, block.length);
        block = lump;
        fl.fprintf("%s\n",block);
        fl.fclose(fl);
        console.log("Changed\n");
    }
}


/* Getstr() with length limit and filter ctrl */
function getkbd(s,l) {
    let f = 0;
    let c = 0;
    while (c < l) {
        // regec:
        let n = getchar();
        if ((n < ' ') && (n !== '\n')) console.log("goto regec");
        if (n === '\n') {
            s[c] = 0;
            f = 1;
            c = l - 1;
        } else {
            s[c] = n;
        }
        c++;
    }
    if (f === 0) {
        s[c] = 0;
        while(getchar() !== '\n') {};
    }
    return s;
}
    

function listfl(name) {
    let string = "";
    console.log("\n");
    let unit = openlock(name, "r+");
    if (!unit) {
    	console.log("[Cannot Find -> ", name,"]\n");
        return;
    }
    while (unit.fgets(string, 128) !== 0) {
        console.log(string);
    }
    unit.fclose();
    console.log("\n");
}


/*
 *		This is just a trap for debugging it should never get
 *		called.
 */ 
const bprintf = () {
    console.log("EEK - A function has trapped via the bprintf call\n");
    exit(0);
};


const chkname = (user) => {
    let a = 0;
    user.toLowerCase();
    while(user[a]) {
        if(user[a] > 'z') {
            user[a] = 0;
            return false;
        }
        if(user[a] < 'a') {
            user[a] = 0;
            return false;
        }
        a++;
    }
    user[0] -= 32;
    return true;
};
