import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const RoutedApp = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/manageData"
        render={props => <App {...props} component="manageData" />}
      />
      <Route
        exact
        path="/manageParking"
        render={props => <App {...props} component="manageParking" />}
      />
      <Route
        exact
        path="/massManage"
        render={props => <App {...props} component="massManage" />}
      />
      <Route
        exact
        path="/signOut"
        render={props => <App {...props} isLogin={true} />}
      />
      <Route
        exact
        path="/login"
        render={props => <App {...props} isLogin={true} />}
      />
      <Route
        exact
        path="/owner"
        render={props => <App {...props} component="owner" />}
      />
      <Route
        exact
        path="/user"
        render={props => <App {...props} component="user" />}
      />
      <Route path="*" render={props => <App {...props} isLogin={true} />} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<RoutedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
