import { HOME_TYPE } from '../../actions/Types'

const initialState = { isHomeSample: false }

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_TYPE:
      return { ...state, isHomeSample: action.payload }
    default:
      return state
  }
}

export default HomeReducer