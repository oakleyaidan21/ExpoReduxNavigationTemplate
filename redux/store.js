import { AsyncStorage } from "react-native";

import { persistStore, persistReducer } from "redux-persist";

import reducer from "./reducer";
import { createStore } from "redux";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["persistReducer"],
  blacklist: ["sessionReducer"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
