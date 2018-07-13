import { handleActions } from "redux-actions";
import Immutable from "immutable";

const defaultState = Immutable.fromJS({
  user: null,
  token: null
});

const authUserReducer = handleActions(
  {
    AUTH_USER_SUCCESS: (state, action) => {
      const { data, token } = action.payload;
      return state.set("user", Immutable.fromJS(data)).set("token", token);
    }
  },
  defaultState
);

export default authUserReducer;
