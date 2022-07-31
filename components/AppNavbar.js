import React from 'react';

function AppNavbar(props) {
  return (
    <div className='navbar bg-base-100 fixed z-50'>
      <div className='navbar-start'>
        <div className='dropdown'>
          {/* Label for mobile that dissapears when goes large */}
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          {/* Mobile menu and dropdown */}
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl lg:hidden'>E.G.</a>
        <a className='btn btn-ghost hidden normal-case text-xl lg:inline-flex'>
          Emanuel Guevara
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>Contact</a>
      </div>
    </div>
  );
}

export default AppNavbar;
