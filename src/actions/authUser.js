export const AUTH_USER = "AUTH_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function authenticatedUser(authUser) {
  return {
    type: AUTH_USER,
    authUser,
  };
}

export function logoutAuthUser() {
  return {
    type: LOGOUT_USER,
  };
}
