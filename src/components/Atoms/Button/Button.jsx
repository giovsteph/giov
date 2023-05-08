import React from "react";
import "./Button.css";

export default function Button(props) {
  let classNames = "btn " + props.className;

  return (
    <button
      type={props.type}
      className={classNames}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
