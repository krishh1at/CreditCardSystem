import React from 'react';

const EmailField = (props) => {
  const { id, name, label, value, placeholder, required, maxLength, onChange } = props;

  return (
    <div className="form-group m-2">
      <label className='control-label' htmlFor={id}>{label}</label>
      <input
        type='email'
        id={id}
        name={name}
        className='form-control'
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        onChange={onChange}
      />
    </div>
  );
}

export default EmailField;
