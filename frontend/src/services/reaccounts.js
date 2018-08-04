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
            console.log(error.response);
            throw Error(error.response.data.error)
        });
    }

    search ({ username }) {
        console.log(username);
        return ReaccountsAxios.get(`/users/search?username=${username}`)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                return (!error.response) ? error.message : error.response.data;
            });
    }

    login ({ username, password, save }) {
        console.log(`Log In ${username}:${password}`);
        return ReaccountsAxios.post('/users/login', { username, password, save })
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            // validateUsername (value) {
            // this.props.dispatch(usersActions.findUser({ username: value }));

            /* Password checking */
            // validatePassword (value) {
            // logpass(this.state.username);
            .catch(error => {
                return (!error.response) ? error.message : error.response.data
            });
    }

    changePassword (user, oldPassword, newPassword, verifyPassword) {
        console.log(`${user} change password from "${oldPassword}" to "${newPassword}"="${verifyPassword}"`)
        return new Promise(resolve => {
            resolve({
                user,
                oldPassword,
                newPassword,
                verifyPassword
            })
        })
                .then(res => {
                    // TODO: Move verifiers to backend
                    if (!res.user) throw Error('No user')
                    // if (res.oldPassword !== user.password) throw Error('Incorrect Password')
                    if (res.oldPassword !== '1') throw Error('Incorrect Password')
                    if (!res.newPassword) throw Error('Password required')
                    if (res.newPassword.indexOf(',') !== -1) throw Error('Illegal Character in password')
                    if (res.newPassword !== res.verifyPassword) throw Error('NO!')
                    return res
                })
                .then(res => {
                    // TODO: Move save password to backend
                    /*
                    delu2(this.props.username)

                    // delete me and tack me on end!
                    let fl = openlock(PFL, "a")
                    fl.fprintf(fl.qcrypt(this.props.user))
                    fl.fclose(fl)
                    */
                    console.log('saved', res)
                    return { result: true }

                })
                .catch(err => {
                    console.error(err)
                    return { error: err.message }
                })
    }
}

export default new ReaccountsService();
