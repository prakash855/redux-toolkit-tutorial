import React from "react";
import { useDispatch } from "react-redux";
import { ClearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(ClearCart());
              dispatch(closeModal());
            }}
            type="buttton"
            className="btn confirm-btn"
          >
            Confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            type="buttton"
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
