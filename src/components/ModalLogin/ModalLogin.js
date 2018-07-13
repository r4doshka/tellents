import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import FormLogin from "../FormLogin/FormLogin";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "999999",
    width: "600px"
  }
};

class ModalLogin extends Component {
  render() {
    const { closeModal, modal, handleSubmit } = this.props;

    return (
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
        ariaHideApp={false}
      >
        <div className="signer-wrapper modal-body">
          <div className="row">
            <div className="col-md-12">
              <button type="button" className="close" onClick={closeModal}>
                <span>×</span>
              </button>
              <h1 className="text-center login-title">
                Login Into Your Account
              </h1>
              <div className="ng-isolate-scope">
                <div className="social-buttons text-center">
                  <a href="" className="share-btn facebook">
                    <i className="fa fa-facebook" />&nbsp;<span>|</span>&nbsp;Sign
                    in with Facebook
                  </a>
                  <a className="share-btn google-plus" href="">
                    <i className="fa fa-google-plus" />&nbsp;<span>|</span>&nbsp;Sign
                    in with Google
                  </a>
                </div>
              </div>
              <div className="row omb_row-sm-offset-3 omb_loginOr">
                <div className="col-md-12">
                  <hr className="omb_hrOr" />
                  <span className="omb_spanOr">or</span>
                </div>
              </div>
              <FormLogin onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalLogin.propTypes = {
  closeModal: PropTypes.func,
  modal: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default ModalLogin;
