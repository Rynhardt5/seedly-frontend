import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <input className="default-form__submit-button" type="submit" value={text} />
  );
};

export default SubmitButton;
