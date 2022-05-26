import React, { useState } from "react";
import ModalBody from "./ModalBody";

const ConfirmModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  function handelAgree() {
    setIsAgree(true);
    setIsOpen(false);
  }

  function handelDisAgree() {
    setIsAgree(false);
    setIsOpen(false);
  }

  return (
    <ModalBody
      isOpen={isOpen}
      handelDisAgree={handelDisAgree}
      handelAgree={handelAgree}></ModalBody>
  );
};

export default ConfirmModal;
