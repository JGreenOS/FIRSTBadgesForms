import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function PubNavbar() {
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
              to='/newuser'
              className={
                window.location.pathname === '/'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Signup
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className={
                window.location.pathname === '/'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
