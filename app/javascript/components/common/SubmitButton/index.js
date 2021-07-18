import React from 'react';

const SubmitButton = (props) => {
  const { value } = props;

  return (
    <div className='form-group pl-2 m-2'>
      <input
        type='submit'
        value={value}
        className='btn btn-primary'
      />
    </div>
  );
}

export default SubmitButton;
