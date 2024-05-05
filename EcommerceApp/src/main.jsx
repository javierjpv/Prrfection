import React from "react";
import ReactDOM from "react-dom/client";
import { EcommerceApp } from "./EcommerceApp";
import { BrowserRouter } from "react-router-dom";
import store from "./Store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
    <Provider store={store}>
      <EcommerceApp />
    </Provider>

  </BrowserRouter>
);
