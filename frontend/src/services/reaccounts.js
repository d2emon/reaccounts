import axios from 'axios';

const REACCOUNTS_ENDPOINT = 'http://localhost:3000/';
const REACCOUNTS_TIMEOUT = 1000;

class ReaccountsService {
    getAccounts() {
        const fetch_url = `${REACCOUNTS_ENDPOINT}users/list`;
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
}

export default new ReaccountsService();
