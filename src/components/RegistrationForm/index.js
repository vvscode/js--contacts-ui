import React from 'react';
import PropTypes from 'prop-types';

class RegistrationForm extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    onSubmit: PropTypes.func,
    inProgress: PropTypes.bool
  }

  static defaultProps = {
    message: '',
    inProgress: false
  }

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  handleValueChange = (propName) => (ev) => this.setState({[propName] : ev.target.value}); 

  onSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSubmit && this.props.onSubmit(this.state);
  }

  render() {
    return <form onSubmit={this.onSubmit}>
      <div>Registration</div>
      <div><input placeholder="First Name" required onChange={this.handleValueChange('firstName')} value={this.state.firstName} /></div>
      <div><input placeholder="Last Name" required onChange={this.handleValueChange('lastName')} value={this.state.lastName} /></div>
      <div><input type="email" placeholder="email" required onChange={this.handleValueChange('email')} value={this.state.email} /></div>
      <div><input type="password" placeholder="password" required onChange={this.handleValueChange('password')} value={this.state.password}/></div>
      <div>
        {this.props.inProgress ?
          <span>processing...</span>
          :
          <input type="submit" value="Send" />
        }
      </div>
      <div>{this.props.message}</div>
    </form>
  }
}

export default RegistrationForm;