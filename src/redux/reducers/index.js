import * as types from '../types';

const DEFAULT_STATE = {
  token: null,
  contacts: [],
  systemMessage: '',
  pendingOperation: false,
}

export default function reducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case types.LOGIN_PENDING: return {
      ...state,
      pendingOperation: true
    };

    case types.LOGIN_SUCCESS: return {
      ...state,
      pendingOperation: false,
      user: action.payload,
    };

    case types.LOGIN_FAIL: return {
      ...state,
      pendingOperation: false,
      systemMessage: 'Login error'
    }

    case types.REGISTRATION_PENDING: return {
      ...state,
      pendingOperation: true
    };

    case types.REGISTRATION_SUCCESS: return {
      ...state,
      pendingOperation: false,
      user: action.payload,
    };

    case types.REGISTRATION_FAIL: return {
      ...state,
      pendingOperation: false,
      systemMessage: 'Registration error'
    }
  }
  return state;
}