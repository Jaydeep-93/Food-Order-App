import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* we can use this trick for adding input props 
      this is highly configuratble way to add props automatically  */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
