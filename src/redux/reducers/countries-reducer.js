import { handleActions } from "redux-actions";

const defaultState = {
  countries: []
};

const countriesReducer = handleActions(
  {
    GET_COUNTRIES_SUCCESS: (state, action) => {
      const { payload } = action;
      return { countries: { ...payload } };
    }
  },
  defaultState
);

export default countriesReducer;
