import React from "react";
import ReactModal from "react-modal";

const Modal = ({ status, info, handleClose }) => {
  return (
    <ReactModal
      closeTimeoutMS={500}
      isOpen={status}
      onRequestClose={handleClose}
      className="absolute m-auto inset-0  h-96 w-96 border border-black outline-none"
    >
      <div className="bg-white h-full">{info()}</div>
    </ReactModal>
  );
};

export default Modal;
