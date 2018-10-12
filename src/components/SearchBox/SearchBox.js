import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBox extends Component {
  render() {
    return (
      <div className="search-form">
        <form className="my-search-form" role="search">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="search-filter radio-block">
            <div className="radio">
              <input
                type="radio"
                ng-model="type"
                name="optionsRadios"
                value="job"
              />
              <label htmlFor="option-jobs">
                <span className="radio-text">Jobs</span>
              </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                ng-model="type"
                name="optionsRadios"
                value="talent"
              />
              <label htmlFor="option-talent">
                <span className="radio-text">Talents</span>
              </label>
            </div>
          </div>
          <button type="submit" className="btn-search">
            <i className="icon icon-loupe" />
          </button>
        </form>
      </div>
    );
  }
}

PropTypes.SearchBox = {};

export default SearchBox;
