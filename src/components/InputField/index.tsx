import React from "react";
import { ErrorMessage, Field } from "formik";
import TextField from "@material-ui/core/TextField";

import "./InputField.css";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type = "text", required = false}) => {
  return (
    <div className="InputField">
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

export default InputField;