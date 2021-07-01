import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list-item'>
          <Link className='link navbar-list-item__link' to='/'>
            Home
          </Link>
        </li>
        <li className='navbar-list-item'>
          <Link className='link navbar-list-item__link' to='/generator'>
            Generator
          </Link>
        </li>
        <li className='navbar-list-item'>
          <Link className='link navbar-list-item__link' to='/palettes'>
            Palettes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
