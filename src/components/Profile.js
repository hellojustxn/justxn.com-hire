import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Paper, IconButton, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 500,
    height: 320,
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
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    height:'100%',
    [theme.breakpoints.down('xs')]: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: "100%", /* width of container */
      // height: "150px", /* height of container */
      overflow: "hidden",
    },
  },
  cardDescription: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontFamily: 'Raleway, sans-serif',
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
        <img src='./justin.JPG' className={classes.profilePicture}/>
        <div className={classes.cardDescription}>
          <div>
            <Typography className={classes.quote}>
              Hi - I'm based in San Francisco, CA and I do full-stack web development with the NERP stack.
            </Typography>
            <Typography className={classes.quote}>
              On my free time, I raise two animals and go traveling (Pre-Covid).
            </Typography>
            <Typography className={classes.author}  variant='subtitle1'>
              Justin
            </Typography>
            <Typography className={classes.role} variant='subtitle2'>
              Software Engineer
            </Typography>
          </div>
          <div>
            <IconButton aria-label='LinkedIn' style={{ color: '#0E76A8' }} href='https://www.linkedin.com/in/justxn/'>
              <LinkedInIcon  fontSize='large' style={{ size: '40px' }} className={classes.largeIcon}/>
            </IconButton>
            {/* <IconButton aria-label='YouTube' style={{ color: 'red' }} href='' >
              <YouTubeIcon  fontSize='large' style={{ size: '40px' }} className={classes.largeIcon}/>
            </IconButton> */}
            <IconButton aria-label='YouTube' style={{ color: 'black' }} href='https://www.youracclaim.com/users/justxn/badges' >
              <img src='./aws-sa.png' className={classes.largeIcon}/>
            </IconButton>
          </div>
        </div>
      </Paper>
  );
}

export default Profile;
