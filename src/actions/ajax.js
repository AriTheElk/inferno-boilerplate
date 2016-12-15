import {
  AJAX_CALL_START,
  AJAX_CALL_FINISH,
} from '../config/constants';

export const startAjaxCall = () => {
  return {
    type: AJAX_CALL_START,
  };
};

export const finishAjaxCall = () => {
  return {
    type: AJAX_CALL_FINISH,
  };
};
