import React from 'react';
import EmailField from '../common/EmailField';
import NumberField from '../common/NumberField';
import TextField from '../common/TextField';
import SubmitButton from '../common/SubmitButton';
import ValidationErrors from '../common/ValidationErrors';

const Form = (props) => {
  const {
    onChangeHandler,
    onSubmitHandler,
    errors,
    applicant: {
      email,
      pan_number,
      aadhar_number,
      account_number,
      ifs_code,
      monthly_recurring_inflow,
      monthly_recurring_outflow
    }
  } = props;

  return (
    <div className='container'>
      <form onSubmit={onSubmitHandler} className='row justify-content-md-center'>
        <div className='bg-light p-4 col-md-5'>
          <h3 className='h3 text-center'>Apply for Credit Cards!</h3>

          <ValidationErrors errors={errors} />

          <EmailField
            id='email'
            name='email'
            label='Email'
            value={email}
            placeholder='Enter Your Email'
            required={true}
            onChange={onChangeHandler}
          />

          <TextField
            id='pan_number'
            name='pan_number'
            label='PAN Number'
            value={pan_number}
            placeholder='Enter PAN Number'
            required={true}
            maxLength={10}
            onChange={onChangeHandler}
          />

          <TextField
            id='aadhar_number'
            name='aadhar_number'
            label='Aadhar Card Number'
            value={aadhar_number}
            placeholder='Enter 12 Digit Aadhar Card Number'
            required={true}
            maxLength={12}
            pattern={'[0-9]{12}'}
            onChange={onChangeHandler}
          />

          <TextField
            id='account_number'
            name='account_number'
            label='Bank Account Number'
            value={account_number}
            placeholder='Enter Your Bank Account Number'
            required={true}
            maxLength={20}
            pattern={'[0-9]+'}
            onChange={onChangeHandler}
          />

          <TextField
            id='ifs_code'
            name='ifs_code'
            label='IFS Code'
            value={ifs_code}
            placeholder='Enter Bank IFSC'
            required={true}
            maxLength={11}
            onChange={onChangeHandler}
          />

          <NumberField
            id='monthly_recurring_inflow'
            name='monthly_recurring_inflow'
            label='Monthly Recurring Inflow'
            value={monthly_recurring_inflow}
            placeholder='Enter Your Monthly Recurring Inflow'
            required={true}
            onChange={onChangeHandler}
          />

          <NumberField
            id='monthly_recurring_outflow'
            name='monthly_recurring_outflow'
            label='Monthly Recurring Outflow'
            value={account_number}
            placeholder='Enter Your Monthly Recurring Outflow'
            required={true}
            onChange={onChangeHandler}
          />

          <SubmitButton value='Apply' />
        </div>
      </form>
    </div>
  )
}

export default Form;
