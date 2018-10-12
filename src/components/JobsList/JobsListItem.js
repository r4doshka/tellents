import React, { Component } from "react";
import PropTypes from "prop-types";

class JobsListItem extends Component {
  render() {
    const { item, even } = this.props;
    const {
      title,
      description,
      promotion_description,
      promotion_title,
      user
    } = item;
    const { total_rate, full_name, place_to_work, image } = user;
    // console.log("JobsListItem", item);
    return (
      <div className="job-box-block">
        <div
          className={`panel panel-default job-box ${
            even ? "right-details" : "left-details"
          }`}
        >
          <div className="job-box-header flexbox justify-space-between">
            <div className="job-box-title">
              <div className="post-date ">7 months ago</div>
              <div className="job-title  ng-isolate-scope">{title}</div>
            </div>
            <div className="panel panel-default">
              <div className="flexbox justify-space-between">
                <div className="job-box-photo-block">
                  <div className="bg-cover circul-shape">
                    <img
                      alt=""
                      className="img-circle"
                      width="38"
                      height="38"
                      src={
                        image.url ||
                        "https://s3.amazonaws.com/wll-community-production/images/no-avatar.png"
                      }
                    />
                  </div>
                </div>
                <div className="award">
                  <span className="icon icon-badge-flat">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                    <span className="path5" />
                    <span className="path6" />
                    <span className="path7" />
                    <span className="path8" />
                    <span className="path9" />
                    <span className="path10" />
                  </span>
                </div>
                <div className="job-box-rate">
                  <span className="icon icon-star-full" />
                  <span className="rate-result ">
                    {total_rate !== 0 ? total_rate : "N/A"}
                  </span>
                </div>
              </div>
              <div className="blue-color ">{full_name}</div>
            </div>
          </div>
          <div className="job-box-body">
            <div className="job-box-tips flexbox justify-space-between">
              <div className="tip">
                <span className="icon icon-location" />
                <span className="text">
                  {place_to_work !== null ? place_to_work : "N/A"}
                </span>
              </div>
              <div className="tip">
                <span className="icon icon-clock-1" />
                <span className="text ">N/A</span>
              </div>
              <div className="tip">
                <span className="icon icon-award" />
                <span className="text ">N/A</span>
              </div>
              <div className="tip ">
                <span className="icon icon-timer" />
                1D
              </div>
              <div className="tip">
                <span className="icon icon-clock-1" />
                <span className="text">N/A</span>
              </div>
            </div>
            <div className="job-box-deskr">
              <div className="text word-wrap">{description}</div>
              <div className="skill-tags-block clearfix"> </div>
            </div>
          </div>
          <div
            className="job-box-footer flexbox justify-space-between"
            id="job-box-details-563"
          >
            <div>
              <div className="additional-info blue-color one-row-angular-truncate">
                {promotion_title}
              </div>
              <div className="card-promotion-description one-row-angular-truncate">
                {promotion_description}
              </div>
            </div>
            <button className="btn btn-blue btn-skill-test btn-bold">
              Free
            </button>
          </div>
        </div>
      </div>
    );
  }
}

JobsListItem.propTypes = {
  item: PropTypes.object,
  even: PropTypes.bool
};

export default JobsListItem;
