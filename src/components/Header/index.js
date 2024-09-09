import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';


import { Nav } from './styled';

export default function Header() {

  const botaoClicado = useSelector(state => state.example.botaoClicado)

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
      {botaoClicado ? 'Clicado' : 'Nao clicado'}
    </Nav>
  );
}
