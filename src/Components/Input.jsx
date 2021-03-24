import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <Field id={name} variant="outlined" name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
