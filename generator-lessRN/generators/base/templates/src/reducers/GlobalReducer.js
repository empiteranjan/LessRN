import { SAMPLE_TYPE } from '../actions/Types'

const initialState = { isGlobalSample: false }

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_TYPE:
      return { ...state, isGlobalSample: action.payload }
    default:
      return state
  }
}

export default GlobalReducer