import _ from 'lodash';
import * as types from './actionTypes';
import redditService from '../../services/reddit';

export function fetchTopics() {
    return (dispatch, getState) => {
	console.log("Promise started");
        // let res = redditService.getDefaultSubreddits()
        return redditService.getDefaultSubreddits().then(response => {
            console.log("RESPONSED", response);
	    console.log("Promise then");
            const topicsByUrl = _.keyBy(response, (subreddit) => subreddit.url);
            console.log(topicsByUrl);
            dispatch({ type: types.TOPICS_FETCHED, topicsByUrl });
	}).catch(error => {
            console.error(error);
	});
    };
}

