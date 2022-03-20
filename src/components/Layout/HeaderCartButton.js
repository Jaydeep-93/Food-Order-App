import classes from "./HeaderCartButton.module.css";
import CartIcon from "./../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CardContext from "./../../store/cart-context";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CardContext);
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const numberOfCarTItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const { items } = cartCtx;
  const btnClass = `${classes.button} ${btnIsHighLighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCarTItems}</span>
    </button>
  );
};

export default HeaderCardButton;
