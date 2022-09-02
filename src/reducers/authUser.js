import { AUTH_USER, LOGOUT_USER } from '../actions/authUser';

export default function authUser(state = null, action) {
  switch (action.type) {
    case AUTH_USER:
      return action.authUser;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
