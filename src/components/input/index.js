import React, { useState } from "react";
import { Input as CustomInput } from "@hbsis.uikit/react";

let timeout;
export const Input = ({ label, value = "", onChange, ...rest }) => {
  const [inputValue, setInputValue] = useState(value);
  const onInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(_ => {
      onChange && onChange(value);
    }, 500);
  };
  return (
    <CustomInput
      {...rest}
      label={label}
      defaultValue={inputValue}
      onChange={onInputChange}
    />
  );
};
