import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import RegistrationForm from '../../components/RegistrationForm';
import { withRouter } from 'react-router-dom';

class RegisterPage extends React.Component {
  onSubmit = (data) => {
    this.props.register(data).then(() => this.props.history.go('/contacts'));
  }
  render() {
    return <RegistrationForm onSubmit={this.onSubmit} inProgress={this.props.pending} message={this.props.message} />
  }
}

export default withRouter(connect(state => ({
  message: state.systemMessage,
  pending: state.pendingOperation
}), {
  register: actions.register
})(RegisterPage));