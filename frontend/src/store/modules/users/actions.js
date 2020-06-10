export function usersRequest() {
  return {
    type: '@users/USERS_REQUEST',
  };
}

export function usersSuccess(users) {
  return {
    type: '@users/USERS_SUCCESS',
    payload: { users },
  };
}
