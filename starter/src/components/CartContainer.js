import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              Total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            onClick={() => dispatch(openModal())}
            className="btn clear-btn"
          >
            Clear Cart
          </button>
        </footer>
      </header>
    </section>
  );
};

export default CartContainer;
