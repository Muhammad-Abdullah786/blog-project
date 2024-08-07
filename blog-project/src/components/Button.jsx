import React from "react";

function Button({
  btnText,
  type = "button",
  bgColor = "bg-blue-700",
  textColor = "text-black",
  className = "",
  ...props
}) {
  return (
    <button
      className={` rounded-lg ${bgColor} ${textColor} ${className} `}
      ${...props}
    >
      {btnText}
    </button>
  );
}

export default Button;
