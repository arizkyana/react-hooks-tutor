import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import useRepository from './hooks/useRepository';

import { useHistory, useLocation } from 'react-router-dom';

const Signin = () => {

  const history = useHistory();
  // const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { actions, loading } = useRepository();

  const handleSubmit = (e) => {
    e.preventDefault();

    actions.signin({ username, password }, () => history.replace('/dashboard'));
  };
  return (
    <section style={{ height: '100vh' }}>
      <Grid style={{ height: '100%', width: '100%' }} container spacing={2} justify="center" alignItems="center">
        <Grid item md={3}>
          <Grid container>
            <form style={{ width: '100%' }} onSubmit={handleSubmit}>
              <Grid item md={12} style={{ textAlign: 'center', padding: '1rem 0' }}>
                <Typography variant="h4" >Sign In</Typography>
              </Grid>
              <Grid item md={12}>
                <TextField onChange={e => setUsername(e.target.value)} fullWidth name="username" margin="dense" variant="standard" label="Username" placeholder="Username" />
              </Grid>
              <Grid item md={12}>
                <TextField onChange={e => setPassword(e.target.value)} type="password" fullWidth name="username" margin="dense" variant="standard" label="Password" placeholder="Password" />
              </Grid>
              <Grid item md={12} style={{ padding: '1rem 0' }}>
                <Button fullWidth type="submit" variant="contained" color="primary" size="large" >
                  {loading && <CircularProgress style={{ marginLeft: '1rem', position: 'absolute', left: '0' }} color="inherit" size={10} variant="indeterminate" />}
                  <span>Login</span>
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default Signin;