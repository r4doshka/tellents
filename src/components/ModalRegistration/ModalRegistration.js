import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import FormRegistration from "../FormRegistration/FormRegistration";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "999999",
    width: "795px",
    marginTop: "40px",
    marginBottom: "40px"
  }
};

class ModalRegistration extends Component {
  render() {
    const { closeModal, modal, handleSubmit } = this.props;

    return (
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Registration Modal"
        ariaHideApp={false}
      >
        <div className="sign-up-modal">
          <div className="modal-header">
            <button type="button" className="close" onClick={closeModal}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-title blue-color">Please Sign Up</div>
            <div className="modal-text">
              Join over 2 million tallents already using Tellents. Start now for
              free!
            </div>
            <FormRegistration onSubmit={handleSubmit} />
          </div>
          <div className="modal-footer">
            <div className="modal-footer-content">
              Or you could sign up with
              <button className="btn circul-shape soc-btn soc-btn--f">
                <span className="icon icon-facebook" />
              </button>
              <span>or </span>
              <button className="btn circul-shape soc-btn soc-btn--g">
                <span className="icon icon-google-plus-logo" />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalRegistration.propTypes = {
  closeModal: PropTypes.func,
  modal: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default ModalRegistration;
