import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import SearchMain from "../components/SearchMain/SearchMain";
import SelectSort from "../components/SelectSort/SelectSort";
import TalentsList from "../components/TalentsList/TalentsList";
import JobsList from "../components/JobsList/JobsList";
import { FormFilterJobs, FormFilterTalents } from "../components/FormFilters";
import Header from "../components/Header/Header";

const filterTalents = [
  {
    id: uuid(),
    title: "Experience",
    type: "checkbox",
    options: [
      {
        id: uuid(),
        label: "Intern"
      },
      {
        id: uuid(),
        label: "Junior"
      },
      {
        id: uuid(),
        label: "Senior"
      },
      {
        id: uuid(),
        label: "Expert"
      }
    ]
  },
  {
    id: uuid(),
    title: "Job Done Success",
    type: "radio",
    options: [
      {
        id: uuid(),
        label: "100%"
      },
      {
        id: uuid(),
        label: "> 95%"
      },
      {
        id: uuid(),
        label: "85-95%"
      },
      {
        id: uuid(),
        label: "< 85%"
      }
    ]
  },
  {
    id: uuid(),
    title: "Skill Test Score",
    type: "radio",
    options: [
      {
        id: uuid(),
        label: "Best (5)"
      },
      {
        id: uuid(),
        label: "5-4.6"
      },
      {
        id: uuid(),
        label: "4.6-4"
      },
      {
        id: uuid(),
        label: "< 4"
      }
    ]
  },
  {
    id: uuid(),
    title: "Freelancer Rate",
    type: "radio",
    options: [
      {
        id: uuid(),
        label: "Best (5)"
      },
      {
        id: uuid(),
        label: "5-4.8"
      },
      {
        id: uuid(),
        label: "4.8-4.5"
      },
      {
        id: uuid(),
        label: "< 4.5"
      }
    ]
  },
  {
    id: uuid(),
    title: "Location",
    subTitle: "Country",
    type: "selectMulty",
    counter: false,
    options: []
  },
  {
    id: uuid(),
    title: "Languages",
    subTitle: "Languages",
    type: "selectMulty",
    counter: false,
    options: []
  },
  {
    id: uuid(),
    title: "Availability",
    type: "checkbox",
    options: [
      {
        id: uuid(),
        label: "< 20h"
      },
      {
        id: uuid(),
        label: "30h"
      },
      {
        id: uuid(),
        label: "> 30h"
      },
      {
        id: uuid(),
        label: "Full Time"
      }
    ]
  },
  {
    id: uuid(),
    title: "Place of Work",
    type: "checkbox",
    options: [
      {
        id: uuid(),
        label: "On-Line"
      },
      {
        id: uuid(),
        label: "On-Site"
      }
    ]
  }
];

const filterJobs = [
  {
    id: uuid(),
    title: "Experience",
    type: "checkbox",
    options: [
      {
        id: uuid(),
        label: "Intern"
      },
      {
        id: uuid(),
        label: "Junior"
      },
      {
        id: uuid(),
        label: "Senior"
      },
      {
        id: uuid(),
        label: "Expert"
      }
    ]
  },
  {
    id: uuid(),
    title: "Posted",
    type: "radio",
    options: [
      {
        id: uuid(),
        label: "24h"
      },
      {
        id: uuid(),
        label: "3d"
      },
      {
        id: uuid(),
        label: "1w"
      },
      {
        id: uuid(),
        label: "> 1w"
      }
    ]
  },
  {
    id: uuid(),
    title: "Place",
    type: "checkbox",
    options: [
      {
        id: uuid(),
        label: "On-line"
      },
      {
        id: uuid(),
        label: "On-site"
      }
    ]
  },
  {
    id: uuid(),
    title: "Location",
    subTitle: "Country",
    type: "selectMulty",
    counter: true,
    options: []
  },
  {
    id: uuid(),
    title: "Languages",
    subTitle: "Languages",
    type: "selectMulty",
    counter: true,
    options: []
  },
  {
    id: uuid(),
    title: "Availability",
    type: "checkbox",
    options: [
      {
        id: uuid(),
        label: "< 20h"
      },
      {
        id: uuid(),
        label: "> 20h"
      },
      {
        id: uuid(),
        label: "Full Time"
      },
      {
        id: uuid(),
        label: "Undefined"
      }
    ]
  },
  {
    id: uuid(),
    title: "Payment",
    type: "range",
    options: [
      {
        id: uuid(),
        label: "Fixed Price"
      },
      {
        id: uuid(),
        label: "Hourly"
      }
    ]
  },
  {
    id: uuid(),
    title: "Budget",
    subTitle: "Select budget",
    type: "selectOnce",
    counter: false,
    options: [
      {
        id: uuid(),
        label: "$0 - $100"
      },
      {
        id: uuid(),
        label: "$100 - $300"
      },
      {
        id: uuid(),
        label: "$300 - $1000"
      },
      {
        id: uuid(),
        label: "> $1000"
      },
      {
        id: uuid(),
        label: "Not defined (Empty)"
      }
    ]
  },
  {
    id: uuid(),
    title: "Proposals",
    type: "radio",
    options: [
      {
        id: uuid(),
        label: "0 - 5"
      },
      {
        id: uuid(),
        label: "5 - 10"
      },
      {
        id: uuid(),
        label: "10 - 20"
      },
      {
        id: uuid(),
        label: "> 20"
      },
      {
        id: uuid(),
        label: "None"
      }
    ]
  }
];

const KEY_WORDS = {
  Experience: "exp",
  "Job Done Success": "ds",
  "Skill Test Score": "skill",
  "Freelancer Rate": "rate",
  Location: "loc",
  Languages: "lang",
  Availability: "avl",
  "Place of Work": "place",
  Place: "place",
  Posted: "post",
  Budget: "bud",
  Proposals: "prop",
  Payment: "payment"
};

class Search extends Component {
  state = {
    userSettings: false
  };

  componentDidMount = () => {
    const { onSetFilter } = this.props;
    onSetFilter("jobs");
  };

  getEntries = entries => {
    const { languages, countries } = this.props;

    const combineEntries = entries.map(item => {
      if (item.type === "selectMulty" && item.title === "Languages") {
        return { ...item, options: [...languages] };
      }
      if (item.type === "selectMulty" && item.title === "Location") {
        return { ...item, options: [...countries] };
      }
      return item;
    });

    return combineEntries;
  };

  getSubmitInfo = entries => {
    return entries.map(item => {
      const { id, title } = item;
      return { [id]: KEY_WORDS[title] };
    });
  };

  handleSubmit = values => {
    const { onFilter, onSetFilterValues, filter } = this.props;

    const telents = this.getSubmitInfo(filterTalents);
    const jobs = this.getSubmitInfo(filterJobs);

    const formData = values[filter].map((item, index) => {
      const { answer, id } = item;
      const answersString = Array.isArray(answer) ? answer.join() : answer;
      return filter === "jobs"
        ? { [jobs[index][id]]: answersString }
        : { [telents[index][id]]: answersString };
    });

    onSetFilterValues(formData);

    filter === "jobs" ? onFilter({ formData }) : onFilter({ formData });
  };

  handleMoreClick = func => {
    const { filter } = this.props;
    const { onLoadMore } = this.props;

    if (filter === "jobs") {
      return onLoadMore();
    } else {
      return onLoadMore();
    }
  };

  renderMoreBtn = () => {
    const { filter, jobs, tellents } = this.props;

    const isFilterJobs = filter === "jobs";

    if (!isFilterJobs && tellents.meta.next_page !== null) {
      return (
        <button
          className="btn btn-bg-transparent blue-color btn-bold"
          onClick={() => {
            this.handleMoreClick();
          }}
        >
          Load more
        </button>
      );
    }

    if (isFilterJobs && jobs.meta.next_page !== null) {
      return (
        <button
          className="btn btn-bg-transparent blue-color btn-bold"
          onClick={() => {
            this.handleMoreClick();
          }}
        >
          Load more
        </button>
      );
    }
  };

  getInitialAnswerByType(type) {
    return type === "checkbox" ? [] : [];
  }

  getInitialValues(entries) {
    return entries.map(entry => {
      return { id: entry.id, answer: this.getInitialAnswerByType(entry.type) };
    });
  }

  render() {
    const {
      tellents,
      jobs,
      logout,
      setFilterState,
      filter,
      onSetFilter,
      onSortTalents,
      onSortJobs,
      sort,
      onSearchTalents
    } = this.props;
    const { user } = this.props.auth;

    const initialValues =
      filter === "jobs"
        ? { jobs: this.getInitialValues(filterJobs) }
        : {
            talents: this.getInitialValues(filterTalents)
          };

    const entries =
      filter === "jobs"
        ? this.getEntries(filterJobs)
        : this.getEntries(filterTalents);

    return (
      <div className="home-page">
        <div className="wrapper dashboard-page">
          <Header user={user} logout={logout} />
          <div className="content">
            <div className="container-fluid">
              <div className="row content-header flexbox">
                <div className="col-xs-2 left-sidebar">
                  <div>
                    <div className="hello-header">
                      <div className="blue-color hello-header-name">
                        Hi {user ? user.full_name : ""},
                      </div>
                      <div className="hello-header-text">
                        What are you looking for today?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-10">
                  <SearchMain
                    onSetFilter={onSetFilter}
                    filter={filter}
                    onSearchTalents={onSearchTalents}
                  />
                </div>
              </div>
              <div className="row job-boxes-header flexbox">
                <div className="col-xs-2 left-sidebar">
                  <div className="panel panel-default panel-gray job-boxes-filter">
                    <div className="search-filter radio-block flexbox justify-space-center">
                      <div className="radio">
                        <input
                          type="radio"
                          name="job-boxes-filter"
                          id="jobs-filter-2"
                          value="0"
                        />
                        <label htmlFor="jobs-filter-2">
                          <span className="radio-text">Jobs</span>
                        </label>
                      </div>
                      <button
                        type="button"
                        className={`btn radio-switcher clearfix
                          ${filter === "jobs" ? "left" : "right"}`}
                        onClick={() => {
                          onSetFilter(filter);
                        }}
                      >
                        <div className="circul-shape">
                          <span className="icon icon-check-mark" />
                        </div>
                      </button>
                      <div className="radio">
                        <input
                          type="radio"
                          id="talents-filter-2"
                          name="job-boxes-filter"
                          value="1"
                        />
                        <label htmlFor="talents-filter-2">
                          <span className="radio-text">Talents</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button className="btn filter-btn panel-gray">
                    <div className="flexbox justify-space-between">
                      <span>Advanced Filters</span>
                      <span className="icon icon-next-arrow" />
                    </div>
                  </button>
                </div>
                <div className="col-xs-10">
                  <div className="panel panel-default panel-gray job-boxes-nav">
                    <nav className="flexbox justify-flex-end">
                      <div className="sort-nav">
                        <span className="sort-nav-title">Sort By</span>
                        <SelectSort
                          onSortTalents={onSortTalents}
                          onSortJobs={onSortJobs}
                          filter={filter}
                          sort={sort}
                        />
                        <span className="sort-result">
                          Result:
                          <span className="sort-result-numb ng-binding">
                            {filter === "jobs"
                              ? jobs.meta.total_count
                              : tellents.meta.total_count}
                          </span>
                        </span>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="row main-content flexbox">
                <div className="col-xs-2 left-sidebar">
                  {filter === "jobs" ? (
                    <FormFilterJobs
                      entries={entries}
                      onSubmit={this.handleSubmit}
                      initialValues={initialValues}
                      setFilterState={setFilterState}
                      formName="jobs"
                    />
                  ) : (
                    <FormFilterTalents
                      entries={entries}
                      onSubmit={this.handleSubmit}
                      initialValues={initialValues}
                      setFilterState={setFilterState}
                      formName="talents"
                    />
                  )}
                </div>
                <div
                  className={`col-xs-12 container-fluid job-boxes job-boxes--${
                    filter === "jobs" ? "jobs" : "talents"
                  }`}
                >
                  <div className="flexbox row">
                    <div className="col-xs-12">
                      {filter === "jobs" ? (
                        <JobsList jobs={jobs.jobs} />
                      ) : (
                        <TalentsList users={tellents.users} />
                      )}
                      <div className="job-boxes-footer">
                        {this.renderMoreBtn()}
                      </div>
                    </div>
                    <div className="col-xs-3 right-sidebar">
                      <div className="panel panel-default panel-btn">
                        <a href="">
                          <i className="icon icon-hand" />
                          <span>Start New Project</span>
                        </a>
                      </div>
                      <div className="panel panel-default panel-btn">
                        <a href="">
                          <i className="icon icon-new" />
                          <span> Start New Promotion </span>
                        </a>
                      </div>
                      <div className="panel panel-default panel-btn">
                        <a href="">
                          <i className="icon icon-share" />
                          <span> Tell others Something that you know </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  tellents: PropTypes.object,
  jobs: PropTypes.object,
  auth: PropTypes.object,
  logout: PropTypes.func,
  setFilterState: PropTypes.func,
  search: PropTypes.object,
  onSetFilterValues: PropTypes.func,
  languages: PropTypes.array,
  countries: PropTypes.array,
  filter: PropTypes.string,
  onSetFilter: PropTypes.func,
  onSortTalents: PropTypes.func,
  onSortJobs: PropTypes.func,
  sort: PropTypes.string,
  onSearchTalents: PropTypes.func,
  onLoadMore: PropTypes.func,
  onFilter: PropTypes.func
};

export default Search;
