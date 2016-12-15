import 'whatwg-fetch';
import {
  MOVIES_LOADED,
  MOVIES_QUERY_CHANGED,
} from '../config/constants';
import { startAjaxCall, finishAjaxCall } from './ajax';

/**
 * Action fired after the tweets are loaded via the Twitter API
 *
 * @export
 * @param {array} tweets
 */
export const moviesLoaded = (results) => {
  return {
    type: MOVIES_LOADED,
    results,
  };
};

/**
 * Action fired after the twitter username has been set/changed
 *
 * @export
 * @param {string} user
 */
export const moviesQueryChanged = (query) => {
  return {
    type: MOVIES_QUERY_CHANGED,
    query,
  };
};


/**
 * Side-load the movie list via redux-thunk action
 *
 * @export
 * @param {string} user
 */
export const setMoviesQuery = (query) => {
  return function (dispatch) {
    dispatch(moviesQueryChanged(query));
    dispatch(startAjaxCall());
    console.log('movies query');
    fetch('http://www.omdbapi.com/?s=' + query)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log('parsed json', json);
      dispatch(moviesLoaded(json.Search));
      dispatch(finishAjaxCall());
    }).catch(function(ex) {
      console.log('parsing failed', ex);
      dispatch(finishAjaxCall());
    });
  };
};
