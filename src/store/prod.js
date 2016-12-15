// this is the store that gets used when in production mode
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
