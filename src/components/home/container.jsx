import React from 'react';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = ({ history }) => {
  const handleSignin = () => {
    console.log('history :: ', history);
    history.push('/signin');
  };
  return (
    <Container>
      <Grid style={{ padding: '3rem 0' }} container>
        <Grid item md={12}>
          <Typography variant="h1">Home</Typography>
          {/* <Button variant="text" color="primary" onClick={handleSignin} >Sign in</Button> */}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home;