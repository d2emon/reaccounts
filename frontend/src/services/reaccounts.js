import axios from 'axios';
import {
    PFL,

    REACCOUNTS_ENDPOINT,
    REACCOUNTS_TIMEOUT
} from '../config';

const ReaccountsAxios = axios.create({
    baseURL: REACCOUNTS_ENDPOINT,
    timeout: REACCOUNTS_TIMEOUT
});

class ReaccountsService {
    getAccounts() {
        // const fetch_url = `${REACCOUNTS_ENDPOINT}users/list`;
        const url = "/accounts/list";

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
        return ReaccountsAxios.get(url)
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

    usersMain ({ hostname, user_id }) {
        return ReaccountsAxios.get(`/users/main?host=${hostname}&user_id=${user_id}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw Error(error.response.data.error)
        });
    }

    validateUser ({ username, password }) {
        console.log('VALIDATE', username, password);
        return ReaccountsAxios.post('/users/validate', { username, password })
            .then(response => {
                console.log(response.data);
                return response.data.errors;
            })
            .catch(error => {
                return error.response.data.errors;
            });
            // validateUsername (value) {
            // this.setState({ namegiv: false });
            // this.props.dispatch(usersActions.findUser({ username: value }));

            /* Password checking */
            // validatePassword (value) {
            // logpass(this.state.username);
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
