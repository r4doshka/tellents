import { handleActions } from "redux-actions";

const defaultState = {
  isGlobalError: false,
  globalError: []
};

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
        return {
          ...state,
          isGlobalError: true,
          globalError: payload.response.errors
        };
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
        return {
          ...state,
          isGlobalError: true,
          globalError: payload.response.errors
        };
      }
      return state;
    },
    GET_USERS_REQUEST: (state, action) => {
      console.log("request ", state, action);
      return state;
    },
    GET_USERS_FAILURE: (state, action) => {
      // const isError = action.error;
      // const payload = action.payload;
      // if (isError) {
      //   return state
      //     .set("isGlobalError", true)
      //     .set("globalError", Immutable.fromJS(payload.response.errors));
      // }
      console.log("state: ", state);
      console.log("action: ", action.error);
      return state;
    },
    SORT_TALENTS_FAILURE: (state, action) => {
      console.log("state ", state);
      console.log("action", action);
      return state;
    }
  },
  defaultState
);

export default errorsReducer;
