import { SessionConstants,
         receiveCurrentUser,
         receiveErrors } from '../actions/session_actions';
import { FilterConstants } from '../actions/filter_actions';
import { login, logout, signup } from '../util/session_api_util';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  const successUser = (user) => dispatch(receiveCurrentUser(user));
  const successLogout = () => next(action);
  const errors = (res) => dispatch(receiveErrors(res));

  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, successUser, errors);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(successLogout, errors);
      return next(action);
    case SessionConstants.SIGNUP:
      signup(action.user, successUser, errors);
      return next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
