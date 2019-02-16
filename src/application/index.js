import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import RegisterPage from '../pages/register/index';
import ContactsPage from '../pages/contacts/index';
import LoginPage from '../pages/login/index';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/contacts" component={ContactsPage} />
        <Route component={() => <Redirect to="/login" />} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
