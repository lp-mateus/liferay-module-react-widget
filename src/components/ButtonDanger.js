import React from "react";

const ButtonDanger = (props) => {
  return (
    <button form={props.form} type={props.type} className="btn btn-danger">{props.text}</button>
  );
};

export default ButtonDanger;
