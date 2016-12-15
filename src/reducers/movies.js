import * as types from '../config/constants';
import initialState from './initialState';

export default function postsReducer(state = initialState.movies, action) {
  switch (action.type) {
  case types.MOVIES_LOADED:
    return Object.assign({}, state, { results: action.results });
  case types.MOVIES_QUERY_CHANGED:
    return Object.assign({}, state, { query: action.query });
  default:
    return state;
  }
}
