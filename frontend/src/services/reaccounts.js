import axios from 'axios';
import {
    PFL,
    BAN_FILE,
    HOST_MACHINE,
    NOLOGIN,

    REACCOUNTS_ENDPOINT,
    REACCOUNTS_TIMEOUT
} from '../config';
import * as types from "../store/users/actionTypes";


class ReaccountsService {
    getAccounts() {
        // const fetch_url = `${REACCOUNTS_ENDPOINT}users/list`;
        const url = "/users/list";
        const Axios = axios.create({
            baseURL: REACCOUNTS_ENDPOINT,
            timeout: REACCOUNTS_TIMEOUT
        });

        /*
        return fetch(fetch_url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`);
            }
            return response.json();
	})
	*/
        return Axios.get(url)
        .then(response => {
            // const accounts = _.get(response, 'data.children');
            const accounts = response.data;
            if (!accounts) {
                throw new Error(`ReaccountsService getAccounts failed, accountsnot returned`);
            }
            /*
            let res = _.map(children, (subreddit) => {
                // abstract away the specifics of the reddit API response and take only the fields we care about
                return {
                    title: _.get(subreddit, 'data.display_name'),
                    description: _.get(subreddit, 'data.public_description'),
                    url: _.get(subreddit, 'data.url')
                }
            });
	    */
	    return accounts;
        })
        .catch(error => {
            console.error(error);
        });
    }

    /*
     * Check we are running on the correct host
     * see the notes about the use of flock();
     * and the affects of lockf();
     */
    testHostname (hostname) {
        return new Promise(resolve => {
            if (hostname !== HOST_MACHINE) {
                throw Error(`AberMUD is only available on ${HOST_MACHINE}, not on ${hostname}.`);
            }
            resolve(true);
        });
    }

    /*
     * Check if there is a no logins file active
     */
    testNologin () {
        return new Promise(resolve => {
            let a = NOLOGIN.fopen("r");
            if (!a) resolve(true);
            if (a.contents) throw Error(a.contents);
            resolve(true);
        });
    }

    /* Check to see if UID in banned list */
    testBanned (payload) {
        return new Promise(resolve => {
            if (!BAN_FILE) resolve(true);
            BAN_FILE.forEach(item => {
                if (item.toLowerCase() === payload.user_id.toLowerCase()) {
                    throw Error("I'm sorry- that userid has been banned from the Game");
                }
            });
            resolve(true);
        });
    }

    /* Return block data for user or -1 if not exist */
    findUser (payload) {
        return new Promise(resolve => {
            console.log("LOGSCAN", payload);
            let unit = PFL.openlock("r");
            if (!unit) throw Error("No persona file");

            unit.getAll().forEach(block => {
                let wkng = unit.decode(block);
                if (wkng.username.toLowerCase() === payload.username.toLowerCase()){
                    resolve(block);
                }
            });
            resolve(null);
        });
    };

}

export default new ReaccountsService();
