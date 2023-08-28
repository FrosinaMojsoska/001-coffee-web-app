import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartCtx = useContext(CartContext);

  const total = cartCtx.totalAmount;
  const content = cartCtx.items.map((item) => (
    <CartItem
      item={item}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {content}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{total.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onCloseCart} type="submit">
            Close
          </button>
          <button type="submit">Order</button>
        </div>
      </ul>
    </Modal>
  );
};
export default Cart;
