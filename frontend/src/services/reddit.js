// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service

import _ from 'lodash';

const REDDIT_ENDPOINT = 'https://www.reddit.com';

class RedditService {
    getDefaultSubreddits() {
        const url = `${REDDIT_ENDPOINT}/subreddits/default.json`;
        // resolve("ok");
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`);
            }
            return response.json();
	}).then(response => {
            const children = _.get(response, 'data.children');
            if (!children) {
                throw new Error(`RedditService getDefaultSubreddits failed, children not returned`);
            }
            let res = _.map(children, (subreddit) => {
                // abstract away the specifics of the reddit API response and take only the fields we care about
                return {
                    title: _.get(subreddit, 'data.display_name'),
                    description: _.get(subreddit, 'data.public_description'),
                    url: _.get(subreddit, 'data.url')
                }
            });
	    return res;
        });
    }
}

export default new RedditService();
