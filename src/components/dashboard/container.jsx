import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Skeleton from '@material-ui/lab/Skeleton';

import useRepository from './hooks/useRepository';
import { useHistory } from 'react-router-dom';

// card
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';

// sample image
import sample from '../../assets/images/sample.jpg';


const Dashboard = ({ classes }) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory();

  const { actions, courses } = useRepository();

  // load courses
  useEffect(() => {
    actions.getListCourse();
  }, [courses]);

  const handleSignout = () => {
    actions.signout(() => history.replace("/signin"));
  };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    history.push('/profile');
  };

  const renderCourseList = () => {
    return courses ? courses.map((c, i) => (
      <Grid key={i} item xs={12} md={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={sample}
              title="Sample image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Web Development
            </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, blanditiis laboriosam. Eum dolor rem commodi. Nam, voluptate error? Nesciunt nemo ullam eius maxime incidunt odio? Reprehenderit tempora voluptas id facilis?
            </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )) : (
        <Grid item xs={12} md={3}>
          <Skeleton variant="rect" width={210} height={118} />
        </Grid>
      )
  };

  return (
    <>
      <nav className={classes.nav} >
        <Container>
          <Grid container justify="center" alignItems="center" >
            <Grid item xs={6}>
              <ul className={classes.menu}>
                <li>
                  Courses
                </li>
                <li>
                  Mentors
                </li>
                <li>
                  Affiliates
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }} >
              <Button variant="text" color="primary" onClick={handleMenu}>Username</Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleSignout}>Sign out</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Container>
      </nav>
      <Container>

        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={12} >
            <Grid style={{ padding: '3rem 0' }} container justify="center" alignItems="center">
              {/* <Grid item xs={6} >
                <Avatar >AG</Avatar>
              </Grid>
              <Grid item xs={6} >
                <div>
                  <Typography style={{ fontSize: '8pt' }}>Web Developer</Typography>
                  <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>Username</Typography>
                </div>
              </Grid> */}

              <Grid item xs={12}>
                <section style={{ textAlign: 'center' }}>
                  <Typography variant="h1">Courses</Typography>
                </section>
                <Grid style={{ padding: '0.8rem 0' }} container spacing={1} justify="flex-start" alignItems="center">
                  {renderCourseList()}
                </Grid>
              </Grid>
            </Grid>


          </Grid>
        </Grid>
      </Container>
    </>
  )
};

export default Dashboard;