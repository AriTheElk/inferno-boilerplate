import {
  AJAX_CALL_START,
  AJAX_CALL_FINISH,
} from '../config/constants';

/**
 * Action fired when an asynchronous request has been initiated
 *
 * @export
 */
export const startAjaxCall = () => {
  return {
    type: AJAX_CALL_START,
  };
};

/**
 * Action fired when an asynchronous request has been completed
 *
 * @export
 */
export const finishAjaxCall = () => {
  return {
    type: AJAX_CALL_FINISH,
  };
};
