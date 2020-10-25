import React, { useState } from 'react';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import theme from 'theme';
import { useRegister } from 'hooks/index';
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
  loginText: {
    marginLeft: theme.spacing(2),
  },
  loginLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  loginLinkText: {
    cursor: 'pointer',
  },
});

const SignUp = ({ onLoginClick }) => {
  const [mutate] = useRegister({
    onSuccess: () => {
      onLoginClick();
    },
  });
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
        <Box>
          <Typography variant="h4">Sign up</Typography>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.inputItems}>
            <TextField
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
                Sign Up
              </Button>
              <Typography className={classes.loginText}>
                have an account ?{' '}
                <strong className={classes.loginLinkText} onClick={onLoginClick}>
                  Login
                </strong>{' '}
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
