import classes from "./HeaderCartButton.module.css";
import CartIcon from "./../Cart/CartIcon";
import { useContext } from "react";
import CardContext from './../../store/cart-context';


const HeaderCardButton = (props) => {
  const cartCtx = useContext(CardContext) ; 
  
  const numberOfCarTItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount
  }, 0) ; 

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCarTItems}</span>
    </button>
  );
};

export default HeaderCardButton;
