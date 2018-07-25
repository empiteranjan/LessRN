import { DETAILS_TYPE } from '../../actions/Types'

export const DetailsFunction = (isSample) => {
  return dispatch => {
    dispatch ({
      type: DETAILS_TYPE,
      payload: isSample
    });
  }
};