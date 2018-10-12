import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

class TalentsListItem extends Component {
  renderItem = () => {
    return this.props.item.map(item => {
      // console.log({ [item[0]]: item[1] });
      return { [item[0]]: item[1] };
    });
  };

  renderTags = () => {
    const { skillTags } = this.props.item;

    return skillTags.map((tag, index) => {
      return (
        <div key={uuid()} className="skill-tag">
          {tag.name}
        </div>
      );
    });
  };

  render() {
    // console.log("TalentsListItem: ", this.props.item);
    const {
      fullName,
      jobs,
      place,
      hours,
      price,
      rate,
      image,
      description,
      title,
      promotions
    } = this.props.item;

    return (
      <div className="job-box-block">
        <div className="panel panel-default job-box awarded left-details">
          <div className="job-box-header flexbox justify-space-between">
            <div className="job-box-photo-block">
              <div className="job-box-photo bg-cover circul-shape">
                <img
                  alt=""
                  className="img-circle"
                  width="55"
                  src={
                    image.url ||
                    "https://s3.amazonaws.com/wll-community-production/images/no-avatar.png"
                  }
                />
                <i className="notif" />
                <i className="award">
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
                </i>
              </div>
            </div>
            <div className="job-box-title">
              <div className="job-box-name blue-color">{fullName}</div>
              {title && <div className="job-box-prof">{title}</div>}
            </div>
            <div className="job-box-rate">
              <span className="icon icon-star-full" />
              <span className="rate-result">{rate !== 0 ? rate : "N/A"}</span>
            </div>
          </div>
          <div className="job-box-body flexbox justify-space-between">
            <div className="job-box-tips">
              <div className="tip">
                <span className="icon icon-award" />
                <span className="text">N/A</span>
              </div>
              <div className="tip">
                <span className="icon icon-jobs" />
                <span className="text">{jobs !== 0 ? jobs : "N/A"}</span>
              </div>
              <div className="tip">
                <span className="icon icon-location" />
                <span className="text">{place !== null ? place : "N/A"}</span>
              </div>
              <div className="tip">
                <span className="icon icon-clock-1" />
                <span className="text">{hours !== 0 ? hours : "N/A"}</span>
              </div>
              <div className="tip">
                <span className="icon icon-wallet" />
                <span className="text">${price !== null ? price : "N/A"}</span>
              </div>
            </div>
            <div className="job-box-deskr">
              <div className="text word-wrap">
                {description || "No Introduction set yet"}
              </div>

              <div className="skill-tags-block clearfix">
                {this.renderTags()}
              </div>
            </div>
          </div>
          <div className="job-box-footer flexbox justify-space-between">
            <div>
              <div className="additional-info blue-color one-row-angular-truncate">
                {promotions[0]
                  ? promotions[0].title
                  : "The user has not promoted himself yet"}
              </div>
              <div className="card-promotion-description">
                {promotions[0] ? promotions[0].description : ""}
              </div>
            </div>
            <button className="btn btn-skill-test btn-blue btn-bold">
              Free
            </button>
          </div>
        </div>
      </div>
    );
  }
}

TalentsListItem.propTypes = {
  item: PropTypes.object
};

export default TalentsListItem;
