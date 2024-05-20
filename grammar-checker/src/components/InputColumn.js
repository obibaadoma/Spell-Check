import React from 'react';

const InputColumn = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input-column"
    />
  );
};

export default InputColumn;