import React from 'react';

import { Redirect } from 'react-router-dom';

import auth from '../utils/auth';

export const Auth = ({ children }) => {
  if (!auth.getToken()) {
    return (
      <Redirect to="/signin" />
    )
  }
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export const NoAuth = ({ children }) => {
  if (auth.getToken()) {
    return (
      <Redirect to="/dashboard" />
    )
  }
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}