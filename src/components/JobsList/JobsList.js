import React, { Component } from "react";
import JobsListItem from "./JobsListItem";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

class JobsList extends Component {
  renderItems = () => {
    return this.props.jobs.map((item, index) => {
      const even = index % 2;
      return <JobsListItem key={uuid()} item={item} even={even !== 0} />;
    });
  };
  render() {
    // console.log("jobs list ", this.props);
    return (
      <div className="job-boxes-wrapper flexbox justify-space-between flex-wrap">
        {this.renderItems()}
      </div>
    );
  }
}

JobsList.propTypes = {
  jobs: PropTypes.array
};

export default JobsList;
