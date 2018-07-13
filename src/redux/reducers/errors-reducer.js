import { handleActions } from "redux-actions";
import Immutable from "immutable";

const defaultState = Immutable.fromJS({
  isGlobalError: false,
  globalError: []
});

const errorsReducer = handleActions(
  {
    AUTH_USER_REQUEST: (state, action) => {
      // console.log(action);
      return state;
    },
    AUTH_USER_FAILURE: (state, action) => {
      const isError = action.error;
      const payload = action.payload;
      if (isError) {
        // console.log(payload);
        return state
          .set("isGlobalError", true)
          .set("globalError", Immutable.fromJS(payload.response.errors));
      }
      return state;
    },
    REGISTRATION_USER_REQUEST: (state, action) => {
      return state;
    },
    REGISTRATION_USER_FAILURE: (state, action) => {
      const isError = action.error;
      const payload = action.payload;
      if (isError) {
        return state
          .set("isGlobalError", true)
          .set("globalError", Immutable.fromJS(payload.response.errors));
      }
      return state;
    }
  },
  defaultState
);

export default errorsReducer;
