import _ from 'lodash';
import * as types from './actionTypes';
import redditService from '../../services/reddit';

export function fetchTopics() {
    return (dispatch, getState) => {
        // let res = redditService.getDefaultSubreddits()
        return redditService.getDefaultSubreddits().then(response => {
            const topicsByUrl = _.keyBy(response, (subreddit) => subreddit.url);
            dispatch({ type: types.TOPICS_FETCHED, topicsByUrl });
	}).catch(error => {
            console.error(error);
	});
    };
}

