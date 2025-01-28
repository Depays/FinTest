import React from "react";
import "./Modal.css";
import icons from "../../resources/icons";

export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modalContentPadding">
          <button className="closeButton" onClick={onClose}>
            <img src={icons.ModalClose} alt="modal-close" />
          </button>
          <div className="modalBody">{content}</div>
        </div>
      </div>
    </div>
  );
}
