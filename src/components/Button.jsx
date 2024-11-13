import React from "react";

const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="bg-secondary text-white rounded px-5 py-2 shadow-main"
    >
      {children}
    </button>
  );
};

export default Button;
