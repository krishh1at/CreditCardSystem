import React from 'react';
import SystemRecommendation from './SystemRecommendation';

const Applicant = (props) => {
  const { onClickHandler, applicant: { id, email, credit_limit, approval_recommendation } } = props;

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{email}</td>
      <td>{credit_limit}</td>
      <td>
        <SystemRecommendation
          applicant_id={id}
          recommendation={approval_recommendation}
          onClickHandler={onClickHandler}
        />
      </td>
    </tr>
  );
}

export default Applicant;
