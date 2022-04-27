import React from "react";
import Modal from "react-modal";
import { commonModalStyles } from "./commonModalStyles";

const ImagePopup = ({ show, data, closeModal }) => {
  return (
    <Modal
      isOpen={show}
      style={commonModalStyles()}
      onRequestClose={closeModal}
    >
      <div className="popUpContainer">
        <h2>{data ? data.title : ""}</h2>
        <img alt={data ? data.url : "Image unavailable"} src={data ? data.url : ""} className="popupImage" />
        <div className="buttonContainer">
          <div onClick={closeModal} className="buttonStyle">
            Close
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ImagePopup;
