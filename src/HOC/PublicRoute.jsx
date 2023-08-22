import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/selectors';

export const PublicRoute = ({ children }) => {
  const isLogin = useSelector(selectIsLogin);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return children;
};
