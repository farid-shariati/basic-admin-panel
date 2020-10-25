import React, { useState } from 'react';
import { Box, CardMedia, makeStyles } from '@material-ui/core';
import theme from 'theme';
//assets
import wave from 'assets/svg/wave.svg';
import Login from 'components/Login/Login';
import SignUp from 'components/SignUp/SignUp';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
  },
  logo: {
    display: 'flex',
    flex: 1,
    transform: "rotate(90deg)"
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    marginTop: theme.spacing(5),
    width: 300,
  },
  inputItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  btns: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(5),
  },
  signupText: {
    marginLeft: theme.spacing(3),
  },
  signupLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
});

const Auth = () => {
  const classes = useStyles();
  const [pageType, setPageType] = useState(0);
  return (
    <div className={classes.root}>
      <Box className={classes.logo}>
        <CardMedia image={wave} className={classes.welcomeImage} />
      </Box>
      <Box className={classes.inputs}>
        {pageType === 0 && <Login onSignUpClick={() => setPageType(1)} />}
        {pageType === 1 && <SignUp onLoginClick={() => setPageType(0)} />}
      </Box>
    </div>
  );
};

export default Auth;
