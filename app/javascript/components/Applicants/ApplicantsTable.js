import React from 'react';
import Applicant from './Applicant';

const ApplicantsTable = (props) => {
  const { applicants, onClickHandler } = props;
  const applicantRows = applicants.map(applicant => <Applicant key={applicant.id} applicant={applicant} onClickHandler={onClickHandler} />);

  return (
    <div className='my-4'>
      {
        applicants.length > 0 ? (
          <div className='table-responsive '>
            <h3 className='text-center'>All pending applicants!</h3>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Credit Limit</th>
                  <th scope="col">System Recommendation</th>
                </tr>
              </thead>
              <tbody>
                { applicantRows }
              </tbody>
            </table>
          </div>
        ) : <h3 className='h3 text-center'>No new applicants is there!</h3>
      }
    </div>
  );
};

export default ApplicantsTable;
