import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Applicant from './Applicant';
import Applicants from './Applicants';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/apply' component={Applicant} />
        <Route exact path='/applicants' component={Applicants} />
      </Switch>
    </Router>
  )
}

export default App;
