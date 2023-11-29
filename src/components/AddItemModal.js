import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { createPortal } from "react-dom";

const AddItemModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      }
    };
  });

  return createPortal(
    <dialog id="add-item-modal" ref={dialog}>
      <h2>{title}</h2>
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default AddItemModal;
