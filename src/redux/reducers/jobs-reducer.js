import { handleActions } from "redux-actions";

const defaultState = {
  jobs: [],
  meta: {}
};

const jobsReducer = handleActions(
  {
    GET_JOBS_SUCCESS: (state, action) => {
      const { jobs, meta } = action.payload;
      return { jobs: [...jobs], meta: meta };
    },
    LOAD_MORE_JOBS_SUCCESS: (state, action) => {
      const { jobs, meta } = action.payload;
      return { jobs: [...state.jobs, ...jobs], meta: meta };
    }
  },
  defaultState
);

export default jobsReducer;
