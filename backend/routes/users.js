'use strict';
import express from 'express';
import { check, validationResult } from 'express-validator/check';

import requestTests from '../tests';
import { Pfl, Motd } from "../config";
import { User } from '../models';

import {
    createdTime,
    resetTime
} from "../models/game_time";

const router = express.Router();

router.use((req, res, next) => {
    requestTests(req.query.user_id, req.query.host).then(() => {
        next();
    }).catch(error => {
        console.error(error);
        res.status(403).send({ error: error.message })
    });
});

/**
 * {
 *     created: {Time when system created},
 *     reset: {Time when system was reset}
 * }
 */
router.get('/main', (req, res) => {
    Promise.all([
        createdTime(),
        resetTime(),
        Motd()
    ]).then(response => {
        res.json({
            created: response[0] || '<unknown>',
            reset: response[1],
            motd: response[2].text || ''
        })
    }).catch(error => {
        console.error(error);
        res.status(403).send({
            error: error.message
        })
    })
});

/**
 * Check for legality of names
 * Does all the login stuff
 * The whole login system is called from this
 */
router.post('/login', [
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
        // chkname(user);
        // Check name
        // if (!validname(usrnam)) res.json({ crapup: 'Bye Bye' });

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
    /* save for new user */
    const testPassword = (user) => {
        // printf('This persona already exists, what is the password ?');
        // for (let i = 0; i <= 2; i++) {
        if (req.body.password !== user.password) {
            let error = new Error('Wrong password!');
            error.param = 'password';
            throw error;
        }
        // }
        return {
            user: user,
            is_new: false,
            errors: []
        }
    };

    /* this bit registers the new user */
    const newUser = () => {
        // printf("Creating new persona...\n");
        // printf("Give me a password for this persona\n");
        let user = new User({
            username: req.body.username,
            password: req.body.password
            // data1: null,
            // data2: null,
            // data3: null,
            // data4: null,
        });

        return Pfl.save(user)
            .then(response => {
                console.log('111', response);
                return {
                    user: user,
                    is_new: true,
                    errors: []
                }
            })
    };

    // Password checking
    const logpass = user => {
        if (!req.body.save) return {
            user: user,
            is_new: true,
            errors: []
        };

        return user
            ? testPassword(user)
            : newUser(user);
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    console.log(req.body);

    return Pfl.load(req.body.username)
        .then(logpass)
        .then(response => res.json(response))
        .catch(err => {
            console.error(err);
            return res.status(422).json({ errors: [{
                param: err.param,
                msg: err.message
            }] });
        });
});

/**
 * Check for legality of names
 * Does all the login stuff
 * The whole login system is called from this
 */
router.get('/search', (req, res) => {
    return Pfl.load(req.query.username)
        .then(response => res.json({
            user: response,
        }))
        .catch(err => {
            console.error(err);
            return res.status(422).json({ errors: [{
                    // param: err.param,
                    msg: err.message
                }] });
        });
});

router.get('/talker', () => {
    // cuserid(space);
    // syslog("Game entry by %s : UID %s",user,space); /* Log entry */
    // talker(user);				/* Run system */
    // crapup("Bye Bye");				/* Exit */
});

export default router;
