const SET_FILTER_VALUES = "SET_FILTER_VALUES";
const SET_FILTER = "SET_FILTER";
const SET_SORT = "SET_SORT";
const SET_SEARCH_FIELD = "SET_SEARCH_FIELD";

export const setFilterValues = filterValues => {
  return {
    type: SET_FILTER_VALUES,
    filterValues
  };
};

export const setFilter = value => {
  const filter = value === "talents" ? "jobs" : "talents";
  return {
    type: SET_FILTER,
    filter
  };
};

export const setSort = sort => {
  return {
    type: SET_SORT,
    sort: sort
  };
};

export const setSearchField = searchField => {
  return {
    type: SET_SEARCH_FIELD,
    searchField
  };
};
