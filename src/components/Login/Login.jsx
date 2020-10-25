import React, { useState } from 'react';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import theme from 'theme';
//assets
import { useLogin } from 'hooks';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
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
  signupLinkText: {
    cursor: 'pointer',
  },
});

const Login = ({ onSignUpClick }) => {
  const [mutate] = useLogin();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPsswordHandler = (e) => {
    setPassword(e.target.value);
  };
  //react hook form
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = async (data) => {
    await mutate({ ...data });
  };
  return (
    <div className={classes.root}>
      <Box className={classes.inputs}>
        <Typography variant="h4">Login</Typography>
        <Box className={classes.inputItems}>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.inputItems}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.input}
              value={email}
              onChange={onEmailHandler}
              name="email"
              required
              inputRef={register({
                pattern: {
                  required: 'Required',
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
            />
            {errors.email && errors.email.message}
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className={classes.input}
              value={password}
              onChange={onPsswordHandler}
              required
              name="password"
              inputRef={register({
                required: 'Required',
              })}
            />
            <Box className={classes.btns}>
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
              <Typography className={classes.signupText}>
                not a user ?{' '}
                <strong className={classes.signupLinkText} onClick={onSignUpClick}>
                  Signup
                </strong>{' '}
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
