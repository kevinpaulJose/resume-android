import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { theme } from "./theme";
import { user } from "./user";

import { persistStore, persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

export const ConfigureStore = () => {
  const config = {
    key: "root",
    storage: AsyncStorage,
    debug: true,
  };
  const store = createStore(
    persistCombineReducers(config, {
      theme,
      user,
    }),
    applyMiddleware(thunk)
  );
  const persistor = persistStore(store);
  return { persistor, store };
};
