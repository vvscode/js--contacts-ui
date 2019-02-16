import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const privateRoute = (Component) => withRouter(connect(state => ({
  token: state.token
}))((props) =>{
  if (!props.token) {
    return <Redirect to="/login" />
  }
  return <Component {...props} />
}));

export default privateRoute;