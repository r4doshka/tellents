import React, { Component } from "react";
import { FORM_ERROR } from "final-form";
import ModalLogin from "../components/ModalLogin/ModalLogin";
import ModalRegistration from "../components/ModalRegistration/ModalRegistration";
import tallentPhoto from "../assets/images/landing/tallent-photo.png";
import PropTypes from "prop-types";

class Landing extends Component {
  state = {
    modalRegistration: false,
    modalLogin: false
  };

  openModalRegistration = () => {
    this.setState({ modalRegistration: true });
  };

  closeModalRegistration = () => {
    this.setState({ modalRegistration: false });
  };

  openModalLogin = () => {
    this.setState({ modalLogin: true });
  };

  closeModalLogin = () => {
    this.setState({ modalLogin: false });
  };

  handleLogin = ({ email, password }) => {
    return this.props
      .authUser({
        email,
        password
      })
      .then(resp => {
        // console.log(resp);
        const { error, payload } = resp;
        if (error) {
          return {
            [FORM_ERROR]: payload.response.errors,
            password: ["Wrong password"],
            email: ["Wrong Email"]
          };
        }
      });
  };
  // eslint-disable-next-line
  handleRegistration = ({ first_name, last_name, email, password }) => {
    // console.log("s formi dannie ", this.props);
    return this.props
      .registrationUser({
        first_name,
        last_name,
        email,
        password
      })
      .then(resp => {
        const { error, payload } = resp;
        console.log("payload ", resp);
        if (error) {
          return {
            [FORM_ERROR]: payload.response.errors,
            firstName: ["4e realno tvoe imya?"],
            lastName: ["hahahaha"],
            password: ["Wrong password"],
            email: ["Wrong Email"]
          };
        }
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="landing">
        {this.props.isGlobalError && (
          <div>
            <h1>{this.props.globalError}</h1>
          </div>
        )}
        <ModalLogin
          modal={this.state.modalLogin}
          openModal={this.openModalLogin}
          closeModal={this.closeModalLogin}
          handleSubmit={this.handleLogin}
        />
        <ModalRegistration
          modal={this.state.modalRegistration}
          openModal={this.openModalRegistration}
          closeModal={this.closeModalRegistration}
          handleSubmit={this.handleRegistration}
        />
        <header className="landing-header">
          <div className="header-top bg-cover">
            <div className="header-nav">
              <div className="wrapper">
                <nav className="landing-nav flexbox justify-space-between">
                  <div className="logo">
                    <a className="logo-link" href="index.html">
                      <img
                        src="images/landing/tallents.png"
                        height="39"
                        width="auto"
                        alt=""
                      />
                    </a>
                  </div>
                  <div type="button" className="humburger-icon">
                    <button type="button" className="btn btn-bg-transparent">
                      <span className="icon icon-menu" />
                    </button>
                  </div>
                  <div className="nav-mobile flexbox justify-space-between">
                    <div className="nav-tablet flexbox justify-space-center">
                      <div className="nav-list flexbox justify-space-between">
                        <div className="nav-list-item flexbox">
                          <a
                            data-toggle="modal"
                            data-target="#modal"
                            className="item-text"
                          >
                            How It Works
                          </a>
                        </div>
                        <div className="nav-list-item flexbox">
                          <a href="#tallents-section" className="item-text">
                            Browse Tallents
                          </a>
                        </div>
                        <div className="nav-list-item flexbox">
                          <a href="#categories-section" className="item-text">
                            Tallent Categories
                          </a>
                        </div>
                        <div className="nav-list-item flexbox">
                          <a href="#landing-footer" className="item-text">
                            Sign Up
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-btns flexbox justify-space-between">
                      <button
                        className="register-btn btn btn-bg-transparent btn-with-icon"
                        onClick={this.openModalRegistration}
                      >
                        <span className="button-content">
                          <span className="icon icon-plus-button blue-color" />
                          Register
                        </span>
                      </button>
                      <button
                        className="login-btn btn btn-bg-transparent btn-with-icon"
                        onClick={this.openModalLogin}
                      >
                        <span className="button-content">
                          <span className="icon icon-user2 blue-color" />
                          Login
                        </span>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="header-body">
              <div className="wrapper flexbox">
                <div className="header-info-block">
                  <div className="header-title">
                    <h2>We work for FREE.</h2>
                    <h2>It pays Well</h2>
                  </div>
                  <div className="search-form">
                    <form className="my-search-form" role="search">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Look for a tallent.."
                      />
                      <div className="search-filter radio-block">
                        <div className="radio checked">
                          <input
                            type="radio"
                            name="profile-page-filter"
                            id="jobs-filter"
                            value="jobs-filter"
                            checked=""
                          />
                          <label htmlFor="jobs-filter">
                            <span className="icon icon-next-arrow" />
                            <span className="radio-text">Jobs</span>
                          </label>
                        </div>
                        <div className="radio">
                          <input
                            type="radio"
                            name="profile-page-filter"
                            id="talents-filter"
                            value="talents-filter"
                          />
                          <label htmlFor="talents-filter">
                            <span className="icon icon-next-arrow" />
                            <span className="radio-text">Talents</span>
                          </label>
                        </div>
                      </div>
                      <a href="" type="submit" className="btn-search">
                        <i className="icon icon-loupe" />
                      </a>
                    </form>
                  </div>
                </div>
                <div className="header-img bg-contain" />
              </div>
            </div>
          </div>
          <div className="header-footer">
            <div className="wrapper sign-up-block">
              <div className="sign-up-block-title">
                <h2>Start now!</h2>
              </div>
              <div className="soc-sign-up">
                <span className="text">Sign Up with</span>
                <button className="btn circul-shape soc-btn soc-btn--f">
                  <span className="icon icon-facebook" />
                </button>
                <button className="btn circul-shape soc-btn soc-btn--g">
                  <span className="icon icon-google-plus-logo" />
                </button>
              </div>
              <div className="or-block">
                <hr />
                <span className="text">or</span>
                <hr />
              </div>
              <form className="flexbox flex-wrap justify-space-center sign-up-form">
                <input className="form-control" placeholder="First Name" />
                <input className="form-control" placeholder="Last Name" />
                <input className="form-control" placeholder="Email" />
                <input className="form-control" placeholder="Password" />
                <button className="btn btn-blue btn-with-icon">
                  <span className="button-content">
                    <span className="icon icon-right-arrow" />
                    START NOW
                  </span>
                </button>
              </form>
            </div>
          </div>
        </header>

        <section className="steps-section" id="steps-section">
          <div className="section-title">
            <div className="wrapper">
              <hr />
              <div className="title-text">How It Works?</div>
              <div className="title-descr">
                Try for Free Any Freelancer Your Need Before You hire
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="wrapper">
              <div className="flexbox justify-space-between">
                <div className="steps-thumbnail-wrapper">
                  <div className="steps-thumbnail-title">Post &amp; Try</div>
                  <div className="panel steps-thumbnail">
                    <div className="thumbnail-img-block">
                      <div className="thumbnail-img panel panel-default">
                        <div className="thumbnail-img-wrapper">
                          <div className="square-shape-wrapper">
                            <div className="thumbnail-img-bg thumbnail-img-bg-1 bg-cover square-shape-block" />
                          </div>
                        </div>
                      </div>
                      <div className="thumbnail-img-overlay panel" />
                      <div className="thumbnail-img-overlay-icon circul-shape">
                        <div className="square-shape-wrapper">
                          <span className="icon icon-free" />
                        </div>
                      </div>
                    </div>
                    <div className="thumbnail-descr">
                      <ol>
                        <li>Post</li>
                        <li>Compare</li>
                        <li>Test</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="ellipsis-icon-block">
                  <span className="icon icon-ellipsis" />
                </div>
                <div className="steps-thumbnail-wrapper">
                  <div className="steps-thumbnail-title">
                    Choose &amp; Execute
                  </div>
                  <div className="panel steps-thumbnail">
                    <div className="thumbnail-img-block">
                      <div className="thumbnail-img panel panel-default">
                        <div className="thumbnail-img-wrapper">
                          <div className="square-shape-wrapper">
                            <div className="thumbnail-img-bg thumbnail-img-bg-2 bg-cover square-shape-block" />
                          </div>
                        </div>
                      </div>
                      <div className="thumbnail-img-overlay panel" />
                      <div className="thumbnail-img-overlay-icon circul-shape">
                        <div className="square-shape-wrapper">
                          <span className="icon icon-handshake square-shape-block" />
                        </div>
                      </div>
                    </div>
                    <div className="thumbnail-descr">
                      <ol>
                        <li>Choose</li>
                        <li>Hire</li>
                        <li>Check</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="ellipsis-icon-block">
                  <span className="icon icon-ellipsis" />
                </div>
                <div className="steps-thumbnail-wrapper">
                  <div className="steps-thumbnail-title">Done!</div>
                  <div className="panel steps-thumbnail">
                    <div className="thumbnail-img-block">
                      <div className="thumbnail-img panel panel-default">
                        <div className="thumbnail-img-wrapper">
                          <div className="square-shape-wrapper">
                            <div className="thumbnail-img-bg thumbnail-img-bg-3 bg-cover square-shape-block" />
                          </div>
                        </div>
                      </div>
                      <div className="thumbnail-img-overlay panel" />
                      <div className="thumbnail-img-overlay-icon circul-shape">
                        <div className="square-shape-wrapper">
                          <span className="icon icon-shape square-shape-block" />
                        </div>
                      </div>
                    </div>
                    <div className="thumbnail-descr">
                      <ol>
                        <li>Approve</li>
                        <li>Pay</li>
                        <li>Feedback</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn">learn more</button>
            </div>
          </div>
        </section>

        <section className="tallents-section" id="tallents-section">
          <div className="section-title">
            <div className="wrapper">
              <hr />
              <div className="title-text">
                Browse our highest-rated tallents
              </div>
              <div className="title-descr">
                More then 20 000 talents already are with us
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="tallents-slider">
              <div className="tallents-slider-item">
                <img src={tallentPhoto} alt="" />
                <div className="tallents-slider-item-info">
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
                  <div className="panel-info">
                    <div className="tallent-title">
                      <div className="tallent-name">Clifford Love</div>
                      <div className="tallent-prof">JUNIOR / UI Designer</div>
                    </div>
                    <div className="skill-tags-block clearfix">
                      <div className="skill-tag">Math</div>
                      <div className="skill-tag">Trigonometry</div>
                      <div className="skill-tag">Calculus</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tallents-slider-item">
                <img src={tallentPhoto} alt="" />
                <div className="tallents-slider-item-info">
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
                  <div className="panel-info">
                    <div className="tallent-title">
                      <div className="tallent-name">Clifford Love</div>
                      <div className="tallent-prof">JUNIOR / UI Designer</div>
                    </div>
                    <div className="skill-tags-block clearfix">
                      <div className="skill-tag">Math</div>
                      <div className="skill-tag">Trigonometry</div>
                      <div className="skill-tag">Calculus</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tallents-slider-item">
                <img src={tallentPhoto} alt="" />
                <div className="tallents-slider-item-info">
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
                  <div className="panel-info">
                    <div className="tallent-title">
                      <div className="tallent-name">Clifford Love</div>
                      <div className="tallent-prof">JUNIOR / UI Designer</div>
                    </div>
                    <div className="skill-tags-block clearfix">
                      <div className="skill-tag">Math</div>
                      <div className="skill-tag">Trigonometry</div>
                      <div className="skill-tag">Calculus</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tallents-slider-item">
                <img src={tallentPhoto} alt="" />
                <div className="tallents-slider-item-info">
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
                  <div className="panel-info">
                    <div className="tallent-title">
                      <div className="tallent-name">Clifford Love</div>
                      <div className="tallent-prof">JUNIOR / UI Designer</div>
                    </div>
                    <div className="skill-tags-block clearfix">
                      <div className="skill-tag">Math</div>
                      <div className="skill-tag">Trigonometry</div>
                      <div className="skill-tag">Calculus</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tallents-slider-item">
                <img src={tallentPhoto} alt="" />
                <div className="tallents-slider-item-info">
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
                  <div className="panel-info">
                    <div className="tallent-title">
                      <div className="tallent-name">Clifford Love</div>
                      <div className="tallent-prof">JUNIOR / UI Designer</div>
                    </div>
                    <div className="skill-tags-block clearfix">
                      <div className="skill-tag">Math</div>
                      <div className="skill-tag">Trigonometry</div>
                      <div className="skill-tag">Calculus</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tallents-slider-item">
                <img src={tallentPhoto} alt="" />
                <div className="tallents-slider-item-info">
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
                  <div className="panel-info">
                    <div className="tallent-title">
                      <div className="tallent-name">Clifford Love</div>
                      <div className="tallent-prof">JUNIOR / UI Designer</div>
                    </div>
                    <div className="skill-tags-block clearfix">
                      <div className="skill-tag">Math</div>
                      <div className="skill-tag">Trigonometry</div>
                      <div className="skill-tag">Calculus</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tallents-slider-item">
                <img src={tallentPhoto} alt="" />
                <div className="tallents-slider-item-info">
                  {/* <div className="award">
								<span className="icon icon-badge-flat"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></span>
	    					</div>  */}
                  <div className="panel-info">
                    <div className="tallent-title">
                      <div className="tallent-name">Clifford Love</div>
                      <div className="tallent-prof">JUNIOR / UI Designer</div>
                    </div>
                    <div className="skill-tags-block clearfix">
                      <div className="skill-tag">Math</div>
                      <div className="skill-tag">Trigonometry</div>
                      <div className="skill-tag">Calculus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories-section" id="categories-section">
          <div className="section-title">
            <div className="wrapper">
              <hr />
              <div className="title-text">
                Work with someone perfect for your team
              </div>
              <div className="title-descr">
                Select category you are searching for
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="wrapper">
              <div className="flexbox flex-wrap">
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-code" />
                    </div>
                    <div className="category-item-text">
                      Web, Mobile &amp; Software Dev
                    </div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-network-2" />
                    </div>
                    <div className="category-item-text">
                      IT &amp; Networking
                    </div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-computer" />
                    </div>
                    <div className="category-item-text">
                      Data Science &amp; Analytics
                    </div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-system" />
                    </div>
                    <div className="category-item-text">
                      Engineering &amp; Architecture
                    </div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-palette" />
                    </div>
                    <div className="category-item-text">
                      Design &amp; Creative
                    </div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-ink" />
                    </div>
                    <div className="category-item-text">Writing</div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-globe" />
                    </div>
                    <div className="category-item-text">Translation</div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-legal" />
                    </div>
                    <div className="category-item-text">Legal</div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-support" />
                    </div>
                    <div className="category-item-text">Admin Support</div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-service" />
                    </div>
                    <div className="category-item-text">Customer Service</div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-cart" />
                    </div>
                    <div className="category-item-text">
                      Sales &amp; Marketing
                    </div>
                  </div>
                </div>
                <div className="category-item-block">
                  <div className="category-item-panel">
                    <div className="category-item-icon">
                      <span className="icon icon-clipboard-2" />
                    </div>
                    <div className="category-item-text">
                      Accounting &amp; Consulting
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="landing-footer" id="landing-footer">
          <div className="footer-content bg-cover">
            <div className="wrapper sign-up-block">
              <div className="sign-up-block-title">
                <h2>Join over 2 million tallents already using Tellents.</h2>
                <h2>Start now for free!</h2>
              </div>
              <div className="soc-sign-up">
                <span className="text">Sign Up with</span>
                <button className="btn circul-shape soc-btn soc-btn--f">
                  <span className="icon icon-facebook" />
                </button>
                <button className="btn circul-shape soc-btn soc-btn--g">
                  <span className="icon icon-google-plus-logo" />
                </button>
              </div>
              <div className="or-block">
                <hr />
                <span className="text">or</span>
                <hr />
              </div>
              <form className="flexbox flex-wrap justify-space-center sign-up-form">
                <input className="form-control" placeholder="First Name" />
                <input className="form-control" placeholder="Last Name" />
                <input className="form-control" placeholder="Email" />
                <input className="form-control" placeholder="Password" />
                <button className="btn btn-blue btn-with-icon">
                  <span className="button-content">
                    <span className="icon icon-right-arrow" />
                    START NOW
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="footer-nav">
            <div className="wrapper flexbox justify-space-between">
              <ul className="footer-nav-list list">
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="">Fees &amp; Charges</a>
                </li>
                <li>
                  <a href="">Investor</a>
                </li>
                <li>
                  <a href="">Commuinity</a>
                </li>
              </ul>
              <ul className="soc-icons">
                <li>
                  <a className="soc-link" href="">
                    <span className="icon icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a className="soc-link" href="">
                    <span className="icon icon-google-plus-logo" />
                  </a>
                </li>
                <li>
                  <a className="soc-link" href="">
                    <span className="icon icon-facebook" />
                  </a>
                </li>
                <li>
                  <a className="soc-link" href="">
                    <span className="icon icon-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

Landing.propTypes = {
  authUser: PropTypes.func,
  registrationUser: PropTypes.func,
  globalError: PropTypes.object,
  isGlobalError: PropTypes.bool
};

export default Landing;
