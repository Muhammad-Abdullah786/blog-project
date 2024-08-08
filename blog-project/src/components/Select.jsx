import React, { useId } from "react";

function Select({ options, className = "", label, ...props }, ref) {
  const id = useId();

  return (
    <>
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <select className="" ref={ref} {...props} id={id}>
          {options?.map((option) => (
            <options key={option} value={option}>
              {option}
            </options>
          ))}
        </select>
      </div>
    </>
  );
}

export default React.forwardRef(Select);
