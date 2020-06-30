import React from 'react';
import SiginComponent from '../components/signin';

// pages utils
import { NoAuth } from '../utils/pages'

const SigninPage = (props) => {
  return (
    <NoAuth>
      <SiginComponent {...props} />
    </NoAuth>
  );
}

export default SigninPage;