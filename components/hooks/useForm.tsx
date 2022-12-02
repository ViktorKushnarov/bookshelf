import { useState } from "react";
import type { OnChangeType, OnSubmitFormType } from "../../types";

// useForm functional componen
export const useForm = <T,>(callback: () => Promise<any>, initialState: T) => {
  const [values, setValues] = useState(initialState);

  // onChange
  const onChange = (event: OnChangeType) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // onSubmit
  const onSubmit = async (event: OnSubmitFormType) => {
    event.preventDefault();
    await callback(); // triggering the callback
  };

  // return values
  return {
    onChange,
    onSubmit,
    values,
  };
};
