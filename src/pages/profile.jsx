import React from 'react';

import ProfileComponent from '../components/profile';

import { Auth } from '../utils/pages';

const ProfilePage = (props) => {
  return (
    <Auth>
      <ProfileComponent {...props} />
    </Auth>
  )
};

export default ProfilePage;