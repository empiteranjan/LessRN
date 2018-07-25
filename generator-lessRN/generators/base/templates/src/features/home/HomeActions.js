import { HOME_TYPE } from '../../actions/Types'

export const HomeFunction = (isSample) => {
  return dispatch => {
    dispatch ({
      type: HOME_TYPE,
      payload: isSample
    });
  }
};