import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm/index';
import * as actions from '../../redux/actions';

class LoginPage extends React.Component {
  render() {
    return <div>
      <LoginForm onSubmit={this.props.login} inProgress={this.props.pending} message={this.props.message} />
      <div>
        <Link to="/register">Register</Link>
      </div>
      </div>
  }
}

export default connect(state => ({
  message: state.systemMessage,
  pending: state.pendingOperation
}), {
  login: actions.login
})(LoginPage);