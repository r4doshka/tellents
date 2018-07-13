import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="wrapper dashboard-page">
          <nav className="main-top-nav flexbox justify-space-between">
            <div className="logo">
              <a className="logo-link" href="/dashboard/find">
                <img
                  src="814ba78964663b18dd7244fd338e4197.png"
                  height="39"
                  width="auto"
                />
              </a>
            </div>
            <div type="button" className="humburger-icon">
              <button type="button" className="btn btn-bg-transparent">
                <span className="icon icon-menu" />
              </button>
            </div>
            <section className="nav-mobile flexbox justify-space-between">
              <section className="nav-tablet flexbox justify-space-center">
                <div className="search-form">
                  <form className="my-search-form" role="search">
                    <input
                      type="text"
                      className="form-contro"
                      placeholder="Search"
                    />
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
                <div className="nav-list">
                  <ul className="flexbox justify-space-between">
                    <li className="active">
                      <a href="/dashboard/find">
                        Find <div className="caret" />
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/your-office">
                        Your Office <div className="caret" />
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/how-it-works">
                        How it works <div className="caret" />
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/ask-us">
                        Ask us <div className="caret" />
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <div className="user-box">
                <div href="javascript:;" className="user-photo">
                  <a href="javascript:;">
                    <img
                      src="https://s3.amazonaws.com/wll-community-production/images/no-avatar.png"
                      className="img-circle"
                    />
                  </a>
                </div>
                <i className="notif" />
                <div className="user-box-nav dropdown">
                  <a
                    href=""
                    className="dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sereja Ivanov<span className="caret" />
                  </a>
                  <ul className="dropdown-menu ng-scope">
                    <li>
                      <a href="javascript:;">User Settings</a>
                    </li>
                    <li>
                      <a href="javascript:;">Payment Account</a>
                    </li>
                    <li>
                      <a href="javascript:;">Log Out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </nav>
        </div>
      </div>
    );
  }
}

Search.propTypes = {};

export default Search;
