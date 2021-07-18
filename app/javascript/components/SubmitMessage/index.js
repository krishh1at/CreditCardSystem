import React from 'react';

const SubmitMessage = (props) => {
  return (
    <div className='container'>
      <div className='jumbotron bg-light p-4'>
        <h1 className='display-4 text-success'>You have successfully submitted your application!</h1>
        <p className='lead'>Thanks for your interest. we will reach out shortly after verifying your application!</p>
        <hr className='my-4' />
      </div>
    </div>
  );
}

export default SubmitMessage;
