import React from "react";

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="btn-default border-transparent text-white"
    >
      {props.children}
    </button>
  );
};

export default Button;
