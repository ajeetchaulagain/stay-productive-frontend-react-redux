import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PropTypes } from "prop-types";

const PopupModalForm = ({
  showModal,
  onHide,
  onSubmit,
  errors,
  title,
  buttonTitle,
  children,
}) => {
  return (
    <Modal show={showModal} onHide={onHide} centered>
      <Modal.Header
        style={{ backgroundColor: "#000", color: "#fff", fontSize: "10px" }}
      >
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={onSubmit}>{children}</form>
        {errors && <div className="form-text text-danger">{errors}</div>}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" size="sm" onClick={onSubmit}>
          {buttonTitle}{" "}
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

PopupModalForm.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.string,
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default PopupModalForm;
