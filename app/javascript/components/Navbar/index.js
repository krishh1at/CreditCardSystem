import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-warning'>
      <nav className='navbar navbar-expand-lg navbar-light container p-0'>
        <NavLink to='/' className='font-weight-bold nav-link'>
          <strong>Credit Card System</strong>
        </NavLink>

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink exact to='/' className='nav-link'>Home</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink exact to='/apply' className='nav-link'>Apply</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/applicants' className='nav-link'>Applicants</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
