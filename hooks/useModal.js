import { useState } from "react";

const useModal = (initialState) => {
  const [modalOpen, setModalOpen] = useState(initialState);

  const toggle = () => setModalOpen(!modalOpen);

  return [modalOpen, toggle];
};

export default useModal;
