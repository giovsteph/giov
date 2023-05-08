import React from "react";
import "./Input.css";

export default function Input(props) {
  let classNames = "input " + props.className;

  return (
    <input
      type={props.type}
      className={classNames}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  );
}
