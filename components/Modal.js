import React from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, children, onClose }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    ariaHideApp={false}
    className="absolute m-auto inset-0  h-96 w-96 border border-black outline-none"
  >
    <div className="bg-white h-full">
      <div className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
        <img className="h-4" src="./cancel.svg" />
      </div>
      {children}
    </div>
  </ReactModal>
);

export default Modal;
