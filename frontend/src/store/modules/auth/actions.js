export function singInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function singInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function singUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function singUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function logout() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function singFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
