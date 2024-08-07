import React, { forwardRef, useId } from "react";

const Input = forwardRef(
  ({
    //props
    className = "",
    type = "text",
    label,
    ...props
  }) => {
    const id = useId();
    return (
      <div>
        {label && (
          <label className="" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={` ${className}`}
          {...props}
          ref={ref}
          id={id}
        />
      </div>
    );
  },
  ref
);

export default Input;
