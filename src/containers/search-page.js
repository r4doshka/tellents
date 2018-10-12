import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Search from "../routes/Search";
import {
  fetchTellents,
  filterTalents
} from "../redux/actions/tellents-actions";
import { fetchJobs, filterJobs } from "../redux/actions/jobs-action";
import { logout } from "../redux/actions/auth-user-actions";
import {
  setFilterValues,
  setFilter,
  setSort,
  setSearchField
} from "../redux/actions/search-actions";
import { fetchLanguages } from "../redux/actions/languages-actions";
import { fetchCountries } from "../redux/actions/countries-action";
import {
  getTellents,
  getJobs,
  getLanguages,
  getCountries,
  getCurrentFilterValues
} from "../selectors";

class SearchContainer extends Component {
  state = {
    more: true
  };

  componentWillMount = () => {
    const {
      logged,
      history,
      fetchTellents,
      fetchJobs,
      fetchLanguages,
      fetchCountries,
      setSort,
      setSearchField
    } = this.props;
    if (logged) {
      return (
        fetchTellents() &&
        fetchJobs() &&
        fetchLanguages() &&
        fetchCountries() &&
        setSort() &&
        setSearchField()
      );
    } else {
      history.push("/landing");
    }
  };

  handleFilter = ({ formData, sortData, searchFieldData }) => {
    const {
      search,
      filterTalents,
      filterJobs,
      tellents,
      jobs,
      filter,
      formValues,
      currentFormValues
    } = this.props;

    const sort = sortData || search.sort;
    const searchField = searchFieldData || search.searchFieldData;
    const isJobsFilter = filter === "jobs";
    const page = isJobsFilter ? jobs.meta.next_page : tellents.meta.next_page;
    const data = formValues || formData || currentFormValues;

    console.log("tyt");
    isJobsFilter
      ? filterJobs({ data, page, sort, searchField })
      : filterTalents({ data, page, sort, searchField });
  };

  handleLogout = () => {
    const { logout, history } = this.props;
    logout();
    history.push("/landing");
  };

  handleSetFilterValues = values => {
    const { setFilterValues } = this.props;
    setFilterValues(values);
  };

  handleSetFilter = filter => {
    const { setFilter, setSort, setFilterValues } = this.props;
    setFilter(filter);
    setSort();
    setFilterValues();
  };

  handleSortTalents = sortData => {
    const { setSort } = this.props;
    setSort(sortData);
    this.handleFilter({ sortData });
  };

  handleSortJobs = sortData => {
    const { setSort } = this.props;

    setSort(sortData);
    this.handleFilter({ sortData });
  };

  handleSearchTalents = data => {
    const { setSearchField, search } = this.props;
    const { filterValues, sort } = search;

    setSearchField(data);

    return this.handleFilterTalents(filterValues, sort, data);
  };

  handleSearchMoreTalents = data => {
    const { searchTalents, tellents } = this.props;
    const { meta } = tellents;
    const { more } = this.state;
    const page = meta.next_page;

    searchTalents({ data, more, page });
  };

  handleLoadMore = () => {
    const { more } = this.state;
    const { filterTalents, search, tellents, jobs, filterJobs } = this.props;
    const { filter, filterValues, searchField, sort } = search;

    const isJobsFilter = filter === "jobs";
    const data = filterValues;
    const page = isJobsFilter ? jobs.meta.next_page : tellents.meta.next_page;

    isJobsFilter
      ? filterJobs({ data, page, more, searchField, sort })
      : filterTalents({ data, page, more, searchField, sort });
  };

  render() {
    return (
      <Search
        {...this.props}
        onLoadMore={this.handleLoadMore}
        onFilter={this.handleFilter}
        onMoreFilteredJobs={this.handleMoreFiltredJobs}
        logout={this.handleLogout}
        onSetFilterValues={this.handleSetFilterValues}
        onSetFilter={this.handleSetFilter}
        onSortTalents={this.handleSortTalents}
        onSortJobs={this.handleSortJobs}
        onSearchTalents={this.handleSearchTalents}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    tellents: getTellents(state),
    jobs: getJobs(state),
    languages: getLanguages(state),
    countries: getCountries(state),
    currentFormValues: getCurrentFilterValues(state),
    filter: state.search.filter,
    sort: state.search.sort
  };
};

const mapDispatchToProps = {
  fetchTellents,
  fetchJobs,
  logout,
  filterTalents,
  setFilterValues,
  filterJobs,
  fetchLanguages,
  fetchCountries,
  setFilter,
  setSort,
  setSearchField
};

SearchContainer.propTypes = {
  fetchTellents: PropTypes.func,
  fetchJobs: PropTypes.func,
  logged: PropTypes.bool,
  history: PropTypes.object
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchContainer)
);
