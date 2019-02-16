import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import './App.css';

import '../api';
import RegisterPage from '../pages/register/index';
import ContactsPage from '../pages/contacts/index';
import LoginPage from '../pages/login/index';
import store from '../redux/store';
import privateRoute from './privateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/contacts" component={privateRoute(ContactsPage)} />
            <Route component={() => <Redirect to="/login" />} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
