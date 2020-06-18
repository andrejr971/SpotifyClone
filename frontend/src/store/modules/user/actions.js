export function userUpdateRequest(profile) {
  return {
    type: '@user/USER_UPDATE_REQUEST',
    payload: { profile },
  };
}

export function userUpdateSuccess(profile) {
  return {
    type: '@user/USER_UPDATE_SUCCESS',
    payload: { profile },
  };
}
