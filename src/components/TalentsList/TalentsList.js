import React, { Component } from "react";
import PropTypes from "prop-types";
import TalentsListItem from "./TalentsListItem";
import uuid from "uuid/v4";

class TalentsList extends Component {
  renderItems = () => {
    const { users } = this.props;
    return users.map((user, index) => {
      return <TalentsListItem key={uuid()} item={user} />;
    });
  };
  render() {
    return (
      <div className="job-boxes-wrapper flexbox justify-space-between flex-wrap">
        {this.renderItems()}
      </div>
    );
  }
}

TalentsList.propTypes = {
  users: PropTypes.array
};

export default TalentsList;
