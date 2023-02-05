import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// step 1 : import the provider method in react redux package

import { Provider } from "react-redux";

// step 2 : import the global store file inside the index.js
import {store,persistor} from "./Redux/store";

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

// wrap the provider packae in app component and pass the store method in global store file
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>
);
