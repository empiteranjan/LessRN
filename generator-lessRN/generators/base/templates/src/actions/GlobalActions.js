import { GLOBAL_TYPE } from './Types'

export const GlobalFunction = (isSample) => {
  return dispatch => {
    dispatch ({
      type: GLOBAL_TYPE,
      payload: isSample
    });
  }
};
