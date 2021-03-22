import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
