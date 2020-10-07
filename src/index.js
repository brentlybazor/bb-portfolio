import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Troll from "./components/troll";
// import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const renderApp = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/onlyfans">
          <Troll />
        </Route>
        <Route path="/">
          <Component />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );
  // registerServiceWorker();
}


renderApp(App);
