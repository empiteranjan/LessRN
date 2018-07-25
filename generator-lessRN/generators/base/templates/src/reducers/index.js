import {combineReducers} from 'redux';
import DetailsReducer from '../features/details/DetailsReducer'
import GlobalReducer from './GlobalReducer'
import HomeReducer from '../features/home/HomeReducer'

export default combineReducers({
    DetailsReducer,
    GlobalReducer,
    HomeReducer
});
