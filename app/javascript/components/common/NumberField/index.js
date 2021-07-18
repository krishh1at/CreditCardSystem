import React from 'react';

const NumberField = (props) => {
  const { id, name, label, value, placeholder, required, onChange } = props;

  return (
    <div className="form-group m-2">
      <label className='control-label' htmlFor={id}>{label}</label>
      <input
        type='number'
        id={id}
        name={name}
        className='form-control'
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}

export default NumberField;
