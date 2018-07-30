'use strict';
import express from 'express';
const router = express.Router();
import { check, validationResult } from 'express-validator/check';

import requestTests from '../tests';
import { ResetT, Exe } from "../config";
// import * as usersActions from "../../frontend/src/store/users/actions";

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
const createdTime = () => Exe();

/**
 * Check for reset time
 * @returns {Promise<any>}
 */
const resetTime = () => ResetT();

router.get('/main', (req, res) => {
    Promise.all([
        createdTime(),
        resetTime()
    ]).then(response => {
        res.json({
              created: response[0] || '<unknown>',
              reset: response[1]
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

/**
 * Check for legality of names
 */
router.post('/validate', [
    check('username')
        .exists({
            checkNull: true,
            checkFalsy: true
        })
        .withMessage('Username is required')
        .isLength({ max: 15 })
        .withMessage('Username is too long')
        .isAlpha()
        .withMessage('Illegal characters in user name'),
    check('password')
        .exists({
            checkNull: true,
            checkFalsy: true
        })
        .withMessage('Password is required')
        .isLength({ max: 15 })
        .withMessage('Password is too long')
        .isAlphanumeric()
        .withMessage('Illegal characters in password')
], (req, res) => {
    // chkname(value);
    /* Gets name tidied up */
    // if (!validname(value)) throw Error("Bye Bye");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
           errors: errors.array()
        });
    }
    res.json({ errors: [] });
});

export default router;
