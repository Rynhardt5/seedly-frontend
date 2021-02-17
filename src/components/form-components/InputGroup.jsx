import React from "react";

const InputGroup = (props) => {
  return (
    <div className="default-form__input-group">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        ref={props.register}
      />

      {props.errors[props.name] && <span>{props.errorMessage}</span>}
    </div>
  );
};

export default InputGroup;
