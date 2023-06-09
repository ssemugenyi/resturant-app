import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
/**REDUX IMPORTS */
import { Provider } from "react-redux";
import store from "./store/index";
/**BOOTSTRAP IMPORTS */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </Router>
  </Provider>
);
