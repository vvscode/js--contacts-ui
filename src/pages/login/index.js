import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/index';

class LoginPage extends React.Component {
  render() {
    return <div>
      <LoginForm />
      <div>
        <Link to="/register">Register</Link>
      </div>
      </div>
  }
}

export default LoginPage;