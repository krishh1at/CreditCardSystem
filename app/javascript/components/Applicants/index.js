import React from 'react';
import Axios from 'axios';
import Loading from '../common/Loading';
import ApplicantsTable from './ApplicantsTable';

class Applicants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applicants: [],
      loading: true
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    Axios.get(`/api/v1/applicants`)
    .then(resp => {
      this.setState({ applicants: resp.data, loading: false });
    })
    .catch(resp => {
      console.log(resp);
    })
  }

  onClickHandler(e, id, approved) {
    console.log(id, approved);
    e.preventDefault();
    const csrfToken = document.querySelector('[name=csrf-token]').content
    Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    Axios.put(`/api/v1/applicants/${id}`, { applicant: { approved: approved } })
    .then(resp => {
      const data = resp.data;

      if(data.errors?.length) {
        this.setState({ errors: data.errors });
      } else {
        const leftApplicants = this.state.applicants.filter(applicant => applicant.id !== data?.id )
        this.setState({ applicants: leftApplicants });
      }
    })
    .catch(resp => {
      console.log(resp)
    })
  }

  render() {
    const { applicants, loading } = this.state;

    return (
      <div className='container'>
        {
          loading ?
          <Loading /> :
          <ApplicantsTable
            applicants={applicants}
            onClickHandler={this.onClickHandler}
          />
        }
      </div>
    );
  }
}

export default Applicants;
