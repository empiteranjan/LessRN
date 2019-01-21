import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";
import Logger from "redux-logger";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "../reducers";

const config = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const reducer = persistReducer(config, rootReducer);

function configureStore() {
  let store = createStore(reducer, {}, applyMiddleware(ReduxThunk, Logger));
  let persistor = persistStore(store);
  return { persistor, store };
}

export default configureStore;
