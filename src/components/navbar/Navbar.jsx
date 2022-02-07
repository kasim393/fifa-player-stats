import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return <div className='navbar'>
    <ul>
      <Link className='link' to="/">
        <p> &#8592; Home</p>
      </Link>
    </ul>
  </div>;
};

export default Navbar;
