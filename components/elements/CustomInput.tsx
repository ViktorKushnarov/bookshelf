import { FC } from "react";
import classes from "./CustomForm.module.css";
import type { InputPropsType } from "../../types";

const CustomInput: FC<InputPropsType> = (props) => {
  return (
    <div className={classes.control}>
      <label htmlFor={props.id}>{props.name}</label>
      {!props.isTextarea && (
        <input
          name={props.id}
          id={props.id}
          type={props.type}
          placeholder={props.name}
          onChange={props.onChange}
          value={props.value}
          required
        />
      )}
      {props.isTextarea && (
        <textarea
          name={props.id}
          id={props.id}
          required
          rows={5}
          value={props.value}
          onChange={props.onChange}
        ></textarea>
      )}
    </div>
  );
};

export default CustomInput;
