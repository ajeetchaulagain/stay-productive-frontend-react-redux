import React from "react";
import { PropTypes } from "prop-types";

const TextInput = ({ name, value, onChange, type, placeholder }) => {
  return (
    <div className="field">
      <input
        className="form-control mb-4"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
