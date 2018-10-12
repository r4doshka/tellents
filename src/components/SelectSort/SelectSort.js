import React, { Component } from "react";
import SelectSortOptions from "./SelectSortOptions";
import PropTypes from "prop-types";

const talentsOptions = [
  {
    text: "Relevance",
    id: 1
  },
  {
    text: "Most saved",
    id: 2
  },
  {
    text: "Highest Score",
    id: 3
  },
  {
    text: "Most Hired",
    id: 4
  }
];

const jobsOptions = [
  {
    text: "Newest",
    id: 1
  },
  {
    text: "Highest budget",
    id: 2
  },
  {
    text: "Relevance",
    id: 3
  },
  {
    text: "Long term",
    id: 4
  }
];

class SelectSort extends Component {
  state = {
    options: false
  };

  handleSelectOption = text => {
    const { onSortTalents, onSortJobs, filter } = this.props;
    filter === "jobs" ? onSortJobs(text) : onSortTalents(text);
  };

  render() {
    const { filter, sort } = this.props;
    const { options } = this.state;
    return (
      <button type="button" className="btn">
        <div className={options ? "my-select-box open" : "my-select-box"}>
          <span
            className="my-select-result"
            onClick={() => {
              this.setState({ options: !options });
            }}
          >
            <span className="text">{sort || "Relevance"}</span>
            <span className="icon icon-down-arrow" />
          </span>
          <SelectSortOptions
            options={filter === "jobs" ? jobsOptions : talentsOptions}
            onSelectOption={this.handleSelectOption}
          />
        </div>
      </button>
    );
  }
}

SelectSort.propTypes = {
  onSortTalents: PropTypes.func,
  onSortJobs: PropTypes.func,
  filter: PropTypes.string,
  sort: PropTypes.string
};

export default SelectSort;
