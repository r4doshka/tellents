import { handleActions } from "redux-actions";

const defaultState = {
  languages: []
};

const languagesReducer = handleActions(
  {
    GET_LANGUAGES_SUCCESS: (state, action) => {
      const { languages } = action.payload;
      return { languages: [...languages] };
    }
  },
  defaultState
);

export default languagesReducer;
