'use strict';
import express from 'express';
const router = express.Router();

import requestTests from '../tests';
import { Config } from '../models';

router.use((req, res, next) => {
    requestTests(req.query.user_id, req.query.host).then(() => {
        next();
    }).catch(error => {
        console.error(error);
        res.status(403).send({ error: error.message })
    });
});

/**
 * Check for all the created at stuff
 * We use stats for this which is a UN*X system call
 * @returns {Promise<any>}
 */
function createdTime () {
  return Config.findOne({ key: 'EXE' })
    .then(response => {
      return response || '<unknown>'
    })
}

function resetTime () {
  return Config.findOne({ key: 'RESET_N' })
}

router.get('/main', (req, res) => {
  Promise.all([
    createdTime(),
    resetTime()
  ]).then(response => {
    res.json({
      created: response[1],
      reset: response[2]
    })
  }).catch(error => {
    console.error(error);
    res.status(403).send({ error: error.message })
  })

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

export default router;
