import React from "react";

const CustomInput = (props) => {
    const { type, name, placeholder, classname } = props;
    return (
        <input
            type={type}
            name={name}
            className={`form-control  ${classname}`}
            placeholder={placeholder}
        />
    );
};

export default CustomInput;
