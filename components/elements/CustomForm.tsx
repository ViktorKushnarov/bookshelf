import { FC } from "react";
import classes from "./CustomForm.module.css";
import CustomInput from "./CustomInput";
import { DEFAULT_BOOK_FIELDS } from "../../utils";
import type { BookFormProps, BookDetailPropsType } from "../../types";

const CustomForm: FC<BookFormProps> = (props) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <div>
        {props.book
          ? Object.entries(props.book).map(([bookField, bookValue]) => {
              if (bookField !== "isbn") {
                const key = bookField as string;

                let inputType =
                  DEFAULT_BOOK_FIELDS[key as keyof BookDetailPropsType];

                if (bookField === "description") {
                  return (
                    <CustomInput
                      isTextarea={true}
                      key={bookField}
                      id={bookField}
                      name={bookField}
                      type={inputType}
                      onChange={props.onChange}
                      value={bookValue}
                    />
                  );
                } else {
                  return (
                    <CustomInput
                      key={bookField}
                      id={bookField}
                      name={bookField}
                      type={inputType}
                      onChange={props.onChange}
                      value={bookValue}
                    />
                  );
                }
              }
            })
          : Object.entries(DEFAULT_BOOK_FIELDS).map(([key, value]) => {
              if (key === "description") {
                return (
                  <CustomInput
                    isTextarea={true}
                    key={key}
                    id={key}
                    name={key}
                    type={value}
                    onChange={props.onChange}
                  />
                );
              } else {
                return (
                  <CustomInput
                    key={key}
                    id={key}
                    name={key}
                    type={value}
                    onChange={props.onChange}
                  />
                );
              }
            })}
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default CustomForm;
