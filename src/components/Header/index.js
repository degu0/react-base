import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';


import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/9187234">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
