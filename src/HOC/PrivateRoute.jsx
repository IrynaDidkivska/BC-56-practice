import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLogin } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLogin = useSelector(selectIsLogin);
  if (isLogin) {
    return children;
  }
  return <Navigate to="/login" state={{ FromPage: location }} />;
};
