import { handleActions } from "redux-actions";

const defaultState = {
  user: null,
  token: null
};

const authUserReducer = handleActions(
  {
    AUTH_USER_SUCCESS: (state, action) => {
      const { data, token } = action.payload;
      return {
        ...state,
        user: data,
        token: token
      };
    },
    LOGOUT: (state, action) => {
      console.log("state", state);
      return {
        ...state,
        user: null,
        token: ""
      };
    }
  },
  defaultState
);

export default authUserReducer;
