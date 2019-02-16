import React from 'react';
import PropTypes from 'prop-types';

class LoginForm  extends React.Component {
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
  }

  handleValueChange = (propName) => (ev) => this.setState({[propName] : ev.target.value}); 

  onSubmit = () => this.props.onSubmit && this.props.onSubmit(this.state);

  render() {
    return <form onSubmit={this.onSubmit}>
      <div>Login</div>
      <div><input type="email" placeholder="email" required onChange={this.handleValueChange('email')} value={this.state.email} /></div>
      <div><input type="password" placeholder="password" required  onChange={this.handleValueChange('password')} value={this.state.password}/></div>
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

export default LoginForm;