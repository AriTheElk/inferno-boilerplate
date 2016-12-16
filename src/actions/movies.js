import 'whatwg-fetch';
import {
  MOVIES_LOADED,
  MOVIES_QUERY_CHANGED,
} from '../config/constants';
import { startAjaxCall, finishAjaxCall } from './ajax';

/**
 * Action fired after the movies are loaded via the omdb API
 *
 * @export
 * @param {array} results
 */
export const moviesLoaded = (results) => {
  return {
    type: MOVIES_LOADED,
    results,
  };
};

/**
 * Action fired after the movie query has been set/changed
 *
 * @export
 * @param {string} query
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
    fetch('//www.omdbapi.com/?s=' + query)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      dispatch(moviesLoaded(json.Search));
      dispatch(finishAjaxCall());
    }).catch(function(ex) {
      dispatch(finishAjaxCall());
    });
  };
};
