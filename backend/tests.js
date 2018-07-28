'use strict';
import { HostMachine, NoLogin, BanFile } from "./config";

/**
 * Check we are running on the correct host
 * see the notes about the use of flock();
 * and the affects of lockf();
 * @param hostname
 * @returns {Promise<boolean>}
 */
function testHostname (hostname) {
    return HostMachine()
        .then(res => {
            if (hostname !== res) throw Error(`AberMUD is only available on ${res}, not on ${hostname}`);
            return res;
        })
}

/**
 * Check if there is a no logins file active
 * @returns {Promise<boolean>}
 */
function chknolog () {
    return NoLogin()
        .then(res => {
            if (res) throw Error(res);
            return true;
        })
}

/**
 * Check if banned first
 * Check to see if UID in banned list
 * @param user_id
 * @returns {Promise<any>}
 */
function testBanned (user_id) {
    return BanFile(user_id)
        .then(res => {
            if (res) throw Error("I'm sorry- that user id has been banned from the Game");
            return true;
        })
}

/**
 * Tests on request
 * @param user_id
 * @param hostname
 * @returns {Promise<[boolean , boolean , boolean]>}
 */
export default function requestTests (user_id, hostname) {
    return Promise.all([
        testHostname(hostname),
        chknolog(),
        testBanned(user_id)
    ])
}
