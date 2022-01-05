/**
 * Main App
 */
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// const fs = require("fs");
// require("dotenv").config();
// css
import "./lib/reactifyCss";

// app component
import App from "./container/App";
import Cookies from "universal-cookie";

const cookies = new Cookies();

import { configureStore } from "./store";
import axios from "axios";

const MainApp = () => {

   (function () {
      const token = cookies.get("user_id");
      // console.log(token)
      if (token) {
         axios.defaults.headers.common["Authorization"] = token;
      }
   })();

   return (
      <Provider store={configureStore()}>
         <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router>
               <Switch>
                  <Route path="/" component={App} />
               </Switch>
            </Router>
         </MuiPickersUtilsProvider>
      </Provider>
   );
};

export default MainApp;
