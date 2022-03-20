import classes from "./Input.module.css";
import React from 'react' ; 

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* we can use this trick for adding input props 
      this is highly configuratble way to add props automatically  */}
      <input {...props.input} ref={ref}/>
    </div>
  );
});

export default Input;
