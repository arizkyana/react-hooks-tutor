import React from 'react';
import DashboardComponent from '../components/dashboard';

import { Auth } from '../utils/pages';

const DashboardPage = (props) => {
  return (
    <Auth>
      <DashboardComponent {...props} />
    </Auth>
  );
}

export default DashboardPage;