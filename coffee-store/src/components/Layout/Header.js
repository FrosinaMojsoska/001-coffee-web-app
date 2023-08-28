import CartIcon from "../Cart/CartIcon";
import { Fragment } from "react";
import classes from './Header.module.css'
import coffeeImage from '../../assets/coffee.jpg'

const Header = (props) => {
    
  return (
    
    <Fragment>
       <header className={classes.header}>
        <h1>CoffeeShop</h1>
        <button className={classes.button} onClick={props.onModalClick}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Your Cart</span>
        </button>
      </header>
      <div className={classes['main-image']}>
        <img src={coffeeImage} alt='Coffee!' />
      </div>
    </Fragment>
  );
};

export default Header;
