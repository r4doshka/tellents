import { handleActions } from "redux-actions";

const defaultState = {
  filterValues: [],
  filter: "talents",
  sort: "",
  searchField: ""
};

const searchReducer = handleActions(
  {
    SET_FILTER_STATE: (state, action) => {
      const { filterActive } = action;
      return { ...state, filterActive };
    },
    SET_FILTER_VALUES: (state, action) => {
      const { filterValues } = action;
      return { ...state, filterValues };
    },
    SET_FILTER: (state, action) => {
      const { filter } = action;
      return { ...state, filter };
    },
    SET_SORT: (state, action) => {
      const { sort } = action;
      return { ...state, sort };
    },
    SET_SEARCH_FIELD: (state, action) => {
      const { searchField } = action;
      return { ...state, searchField };
    }
  },

  defaultState
);

export default searchReducer;
