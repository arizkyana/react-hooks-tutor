import React from 'react';

import HomeComponent from '../components/home';


import { NoAuth } from '../utils/pages';

const HomePage = (props) => {
  return (
    <NoAuth>
      <HomeComponent {...props} />
    </NoAuth>
  );
}

export default HomePage;