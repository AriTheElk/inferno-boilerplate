import * as types from '../config/constants';
import initialState from './initialState';

export default function authReducer(state = initialState.ajax, action) {
  switch (action.type) {
  case types.AJAX_CALL_START:
    return Object.assign({}, state, {
      callsInProgress: state.callsInProgress + 1
    });
  case types.AJAX_CALL_FINISH:
    return Object.assign({}, state, {
      callsInProgress: state.callsInProgress - 1
    });
  default:
    return state;
  }
}
