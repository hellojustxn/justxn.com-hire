import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Paper, IconButton, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 800,
    height: 400,
    borderRadius: 20,
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '100%',
      height: 'auto',
      maxWidth: '600px',
      width: '80%',
      flexDirection: 'column',
    },
  },

  profilePicture: {
    height:'100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  cardDescription: {
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontFamily: 'Raleway, sans-serif',
    borderRadius: 20,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  quote: {
    margin: '10px 15px 5px 15px' ,
    textAlign: 'left',
  },
  author: {
    margin: '0px 0px 0px 15px' ,
    textAlign: 'left',
  },
  role: {
    color: "#0E76A8",
    margin: '0px 0px 0px 15px' ,
    textAlign: 'left',
  }
}));



function Profile() {
  const classes = useStyles();

  return (
      <Paper className={classes.paper} elevation={3}>
        <img src='https://justxn-us-west-1.s3-us-west-1.amazonaws.com/profile.jpeg' className={classes.profilePicture}/>
        <div className={classes.cardDescription}>
          <div>
            <Typography className={classes.quote}>
              Hi - I'm based in San Francisco, CA and I'm currently pursuing a B.S. in Computer Science at the University of California, Santa Cruz.
            </Typography>
            <Typography className={classes.quote}>              
               I do full-stack web development with the NERP stack along with scripting in either Bash or Python.
            </Typography>
            <Typography className={classes.quote}>
              When I'm not coding, I spend my time running my online business, making YouTube videos, listening to podcasts, and working out (Pre-Covid!).
            </Typography>
            <Typography className={classes.author}  variant='subtitle1'>
              Justin
            </Typography>
            <Typography className={classes.role} variant='subtitle2'>
              Software Engineer
            </Typography>
          </div>
          <div>
          <IconButton aria-label='LinkedIn' style={{ color: '#0E76A8' }} href='https://bit.ly/justxn_linkedin'>
              <LinkedInIcon  fontSize='large' style={{ size: '40px' }} className={classes.largeIcon}/>
            </IconButton>
          <IconButton aria-label='YouTube' style={{ color: '#FF0000' }} href='http://bit.ly/justxn_youtube' >
              <YouTubeIcon  fontSize='large' style={{ size: '40px' }} className={classes.largeIcon}/>
            </IconButton>
          <IconButton aria-label='Github' style={{ color: '#282828' }} href='https://bit.ly/justxn_github' >
              <GitHubIcon  fontSize='large' style={{ size: '40px' }} className={classes.largeIcon}/>
            </IconButton>
          <IconButton aria-label='YouTube' style={{ color: 'black' }} href='https://bit.ly/justxn_acclaim' >
              <img src='./aws-sa.png' className={classes.largeIcon}/>
            </IconButton>
          </div>
          <div>
            <Typography className={classes.role} variant='subtitle1'>
              Hello @ Justxn.com
            </Typography>
          </div>
        </div>
      </Paper>
  );
}

export default Profile;
