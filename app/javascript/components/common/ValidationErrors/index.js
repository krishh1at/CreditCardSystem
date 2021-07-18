import React from 'react';

const ValidationErrors = (props) => {
  const { errors } = props;
  const validationErrors = errors.map(e => <p key={e} className='text-danger'>{e}</p>);

  return (
    errors.length > 0 && (
      <div className='p-2'>
        { validationErrors }
      </div>
    )
  );
}

export default ValidationErrors;
