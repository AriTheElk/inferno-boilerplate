import { combineReducers } from 'redux';

import ajax from './ajax';
import movies from './movies';

const rootReducer = combineReducers({
  ajax,
  movies,
});

export default rootReducer;
