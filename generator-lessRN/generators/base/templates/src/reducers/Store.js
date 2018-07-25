import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import {persistReducer, persistStore, REHYDRATE, PURGE, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import ReduxThunk from 'redux-thunk';
import Logger from 'redux-logger';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import rootReducer from '../reducers'

const config = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel1,
};

const reducer = persistReducer(config, rootReducer);

  function configureStore() {
    let store = createStore(reducer, {}, applyMiddleware(ReduxThunk, Logger))
    let persistor = persistStore(store)
    return { persistor, store }
  }
  
  export default configureStore