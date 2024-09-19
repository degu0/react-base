import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserAlt, FaSignInAlt, FaPowerOff, FaCircle } from 'react-icons/fa';

import { Nav } from './styled';
import * as actions from '../../store/modules/auth/action'
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    navigate('/');
  }

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to='/logout'>
          <FaPowerOff size={24} />
        </Link>
      ): (
        <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      )}
      {isLoggedIn && <FaCircle size={24} color='#66ff33'/>}
    </Nav>
  );
}
