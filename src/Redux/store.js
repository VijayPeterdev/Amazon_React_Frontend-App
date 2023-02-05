// this is a global store

// step 1 : import configure store method in @redux toolit

import { configureStore, combineReducers } from "@reduxjs/toolkit";

// step 2 : Import  we did  already create the Reducer function

import cartReducer from "../Redux/cartRedux";

import userReducer from "../Redux/userRedux";

// configure the store with reducer and export the store  ( store + reducer)
// because we use this store configuration in index.js file so we export the store

// import {composeWithDevTools} from 'redux-devtools-extension'

// State Refersh Controll panna redux presist use pannurom
// redux page laa irunthu use pannurom https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer with the reducer name and reducer method

  reducer: persistedReducer, 
    // multiple reducer  use this place

   

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
