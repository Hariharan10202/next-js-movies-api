"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

const InputComponent = ({ id, placeholder, type }) => {
  const [value, setValue] = useState();

  if (type === "input") {
    return (
      <span className="p-float-label">
        <InputText
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor={id}>{placeholder}</label>
      </span>
    );
  } else {
    return (
      <div>
        <span className="p-float-label">
          <Password
            value={value}
            onChange={(e) => setValue(e.target.value)}
            toggleMask
          />
          <label htmlFor={id}>{placeholder}</label>
        </span>
      </div>
    );
  }
};

export default InputComponent;
