import React from 'react';
import Axios from 'axios';
import Form from './Form';
import SubmitMessage from '../SubmitMessage';

class Applicant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applicant: {},
      submitted: false,
      errors: []
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault()
    const csrfToken = document.querySelector('[name=csrf-token]').content
    Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    Axios.post(`/api/v1/applicants`, { applicant: this.state.applicant })
    .then(resp => {
      const data = resp.data;
      if(data.errors?.length) {
        this.setState({ errors: data.errors });
      } else {
        this.setState({ submitted: true });
      }
    })
    .catch(resp => {
      console.log(resp)
    })
  }

  onChangeHandler(e) {
    e.preventDefault();
    const newApplicant = Object.assign({}, this.state.applicant, { [e.target.name]: e.target.value });
    this.setState({ applicant: newApplicant });
  }

  render() {
    return (
      <div className='my-4'>
        {
          this.state.submitted ? <SubmitMessage /> : (
            <Form
              applicant={this.state.applicant}
              errors={this.state.errors}
              onChangeHandler={this.onChangeHandler}
              onSubmitHandler={this.onSubmitHandler}
            />
          )
        }
      </div>
    );
  }
}

export default Applicant;
