import  * as types from '../types';
import * as api from '../../api';

export const register = (data) => (dispatch) => {
  dispatch({ type: types.REGISTRATION_PENDING});
  return api.register(data)
    .then((payload) => dispatch({
      type: types.REGISTRATION_SUCCESS,
      payload
    }))
    .catch((payload) => dispatch({
      type: types.REGISTRATION_FAIL,
      payload
    }));
}

export const login = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_PENDING});
  return api.login(data)
    .then((payload) => dispatch({
      type: types.LOGIN_SUCCESS,
      payload
    }))
    .catch((payload) => dispatch({
      type: types.LOGIN_FAIL,
      payload
    }));
}