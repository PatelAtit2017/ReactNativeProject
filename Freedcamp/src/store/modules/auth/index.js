
import * as actions from './actions';

const initialState = {
   loggedIn: null
};


export default function auth(state = initialState, action) {
  switch (action.type) {

    case actions.LOGIN_USER:
      return {
        ...state,
        initialState,
        loggedIn: false,
      };

    default:
      return state;
  };

  return state;
}
