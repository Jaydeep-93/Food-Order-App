import classes from "./MealItemForm.module.css";
import Input from "./../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountisValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enterdAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enterdAmount;
    if (
      enterdAmount.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false) ;
      return;
    }
    props.onAddToCart(enteredAmountNumber) ; 
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add </button>
      {!amountisValid && <p> Please enter valid amount </p>}
    </form>
  );
};

export default MealItemForm;
