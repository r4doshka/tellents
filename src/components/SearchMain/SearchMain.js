import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchMain extends Component {
  state = {
    value: ""
  };

  handleSubmit = () => {
    const { onSearchTalents } = this.props;
    const { value } = this.state;

    onSearchTalents(value);
  };

  render() {
    const { onSetFilter, filter } = this.props;

    return (
      <div className="search-form">
        <div className="my-search-form" role="search" _lpchecked="1">
          <input
            type="text"
            className="form-control"
            placeholder="Search for ..."
            onChange={e => this.setState({ value: e.target.value })}
            value={this.state.value}
          />
          <div className="search-filter radio-block clearfix">
            <div className="radio">
              <input
                type="radio"
                name="home-page-filter"
                id="jobs-filter-1"
                value="0"
                checked={filter === "jobs" && "checked"}
                onChange={() => {
                  onSetFilter(filter);
                }}
              />
              <label htmlFor="jobs-filter-1">
                <span className="radio-text mobile-hide">Jobs</span>
                <span className="radio-text mobile-show">J</span>
              </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                name="home-page-filter"
                id="talents-filter-2"
                value="1"
                checked={filter === "talents" && "checked"}
                onChange={() => {
                  onSetFilter(filter);
                }}
              />
              <label htmlFor="talents-filter-2">
                <span className="radio-text mobile-hide">Talents</span>
                <span className="radio-text mobile-show">T</span>
              </label>
            </div>
          </div>
          <button
            className="btn-search"
            onClick={() => {
              this.handleSubmit();
            }}
          >
            <i className="icon icon-loupe" />
          </button>
        </div>
      </div>
    );
  }
}

SearchMain.propTypes = {
  onSetFilter: PropTypes.func,
  filter: PropTypes.string,
  onSearchTalents: PropTypes.func
};

export default SearchMain;
