import React from 'react';

const SystemRecommendation = (props) => {
  const { onClickHandler, recommendation, applicant_id } = props;

  return (
    recommendation ?
    <button className="btn btn-success" onClick={ (e) => onClickHandler(e, applicant_id, true) }>Accept</button> :
    <button className="btn btn-danger" onClick={ (e) => onClickHandler(e, applicant_id, false) }>Reject</button>
  );
};

export default SystemRecommendation;
