var express = require('express');
var router = express.Router();

var models = require('../models');
var config = require('../config');


/*
 *	Check we are running on the correct host
 *	see the notes about the use of flock();
 *	and the affects of lockf();
 */
function testHostname (hostname) {
    return models.Config.findOne({ key: "HOST_MACHINE" })
    .then(response => {
        allowed = response.value;
        if (hostname !== allowed) {
            throw Error(`AberMUD is only available on ${allowed}, not on ${hostname}`);
        }
        return allowed;
    });
}

/*
 *		Check if there is a no logins file active
 */
function chknolog () {
    return models.Config.findOne({ key: "NOLOGIN" })
    .then(response => {
        if (response) {
            throw Error(response);
        }
        return true;
    });
}

/*
 *	Check for all the created at stuff
 *	We use stats for this which is a UN*X system call
 */
function createdTime () {
    return models.Config.findOne({ key: "EXE" })
    .then(response => {
        return response || "<unknown>";
    });
}

function resetTime () {
    return models.Config.findOne({ key: "RESET_N" });
}

/* Check to see if UID in banned list */
function testBanned (user_id) {
    return models.Ban.findOne({ user_id: user_id })
    .then(response => {
        if (response) throw Error("I'm sorry- that userid has been banned from the Game");
    });
}

function requestTests (user_id, hostname) {
    return Promise.all([
        testHostname(hostname),
        chknolog(),
        /*
         * Check if banned first
         */
        testBanned()
    ])
}


router.get('/main', (req, res) => {
    Promise.all([
        requestTests(req.query.user_id, req.query.host),
        createdTime(),
        resetTime()
    ]).then(response => {
        res.json({
            created: response[1],
            reset: response[2]
        });
    }).catch(error => {
        console.error(error);
        res.status(403).send({ error: error.message });
    });


    // login(user);                  /* Does all the login stuff */
    // if(!qnmrq)
    // {
    //     cls();
    //     listfl(MOTD); 			/* list the message of the day */
    //     fgets(space,399,stdin);
    //     printf("\n\n");
    // }
    // cuserid(space);
    // syslog("Game entry by %s : UID %s",user,space); /* Log entry */
    // talker(user);				/* Run system */
    // crapup("Bye Bye");				/* Exit */
});


module.exports = router;
