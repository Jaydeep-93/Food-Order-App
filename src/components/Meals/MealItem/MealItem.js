import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import {useContext} from 'react'
import CardContext from "../../../store/cart-context"

const MealItem = (props) => {
  const cartCtx = useContext(CardContext) ; 

  const price = `$${props.meal.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount, 
      price: props.meal.price 
    })
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.meal.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
