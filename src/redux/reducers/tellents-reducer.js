import { handleActions } from "redux-actions";

const defaultState = {
  users: [],
  meta: {}
};

const talentsReducer = handleActions(
  {
    GET_TALENTS_SUCCESS: (state, action) => {
      const { users, meta } = action.payload;
      return { users: [...users], meta: meta };
    },
    LOAD_MORE_TALENTS_SUCCESS: (state, action) => {
      const { users, meta } = action.payload;
      return { users: [...state.users, ...users], meta: meta };
    }
  },
  defaultState
);

export default talentsReducer;
