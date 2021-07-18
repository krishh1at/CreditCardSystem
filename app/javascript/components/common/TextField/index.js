import React from 'react';

const TextField = (props) => {
  const { id, name, label, value, placeholder, required, maxLength, pattern, onChange } = props;
  return (
    <div className="form-group m-2">
      <label className='control-label' htmlFor={id}>{label}</label>
      <input
        type='text'
        id={id}
        name={name}
        className='form-control'
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        pattern={pattern}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;
