import { useContext } from "react";
import CoffeeItemForm from "./CoffeeItemForm";
import CartContext from "../../../store/cart-context";
import classes from './CoffeeItem.module.css'
const CoffeeItem = (props) => {

    const cartCtx=useContext(CartContext);
    const addItemHandler = amount => {
        cartCtx.addItem({
          id: props.item.id,
          name: props.item.name,
          amount: amount,
          price: props.item.price
        });
      };

  return (
    <li className={classes.coffee}>
      <div>
        <h3>{props.item.name}</h3>
        <div>{props.item.description}</div>
        <div>{props.item.price}</div>
      </div>
      <div>
        <CoffeeItemForm onSaveAmount={addItemHandler} id={props.item.id} />
      </div>
    </li>
  );
};
export default CoffeeItem;
