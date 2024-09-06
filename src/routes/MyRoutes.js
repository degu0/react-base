import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ element: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: rest.path }} />;
  }

  return <Route {...rest} element={<Component />} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  isClosed: PropTypes.bool,
};
