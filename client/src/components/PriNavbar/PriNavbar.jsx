import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { render } from 'react-dom';
import './style.css';

export default function PriNavbar(props) {
  const [redirect, setRedirect] = useState(false);

  const handleLogout = (event) => {
    axios.get('http://localhost:8080/logout').then((res) => {
      setRedirect(true);
      props.setUser(false);
    });
  };

  if (redirect) {
    return <Redirect to='/logout' />;
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <a className='navbar-brand' href='.'>
        <h1>Badges on Demand!</h1>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavbar'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='collapsibleNavbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link
              to='/form'
              className={
                window.location.pathname === '/form'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Award Form
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/team'
              className={
                window.location.pathname === '/team'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Team Profile
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/stats'
              className={
                window.location.pathname === '/stats'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Stats
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
