import React from "react";

const CustomInput = (props) => {
  const {
    type,
    name,
    placeholder,
    classname,
    value,
    onChange,
    onBlr,
    textArea,
  } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        className={`form-control  ${classname}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlr}
      />
    </>
  );
};

export default CustomInput;
