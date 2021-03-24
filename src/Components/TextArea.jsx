import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import Fade from "react-reveal/Fade";

const TextArea = (props) => {
  const { label, name, ...rest } = props;

  return (
    <Fade left>
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="textarea" name={name} id={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
      </div>
    </Fade>
  );
};

export default TextArea;
