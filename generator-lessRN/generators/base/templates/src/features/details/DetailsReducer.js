import { DETAILS_TYPE } from '../../actions/Types'

const initialState = { isDetailsSample: false }

const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_TYPE:
      return { ...state, isDetailsSample: action.payload }
    default:
      return state
  }
}

export default DetailsReducer