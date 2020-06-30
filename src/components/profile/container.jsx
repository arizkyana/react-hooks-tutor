import React from 'react';
import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();
  const handleBack = () => history.goBack();
  return (
    <Container>
      <div>
        <Button onClick={handleBack} variant="text" color="primary" >Back</Button>
      </div>
      <Typography variant="h1" >Profile</Typography>
    </Container>
  )
};

export default withRouter(Profile);