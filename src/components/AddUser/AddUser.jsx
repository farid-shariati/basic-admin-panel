import { Box, Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import theme from 'theme';
import history from 'helpers/history';
import { useSnackbar } from 'notistack';


const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '65vh',
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:"center"
  },
  inputField: {
    marginLeft:theme.spacing(5),
  },
  addbtn: {
      marginTop:theme.spacing(10)
  }
});

const AddUser = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const addHandler = () => {
    history.push('/users')
    enqueueSnackbar('user added');
  }
  return (
    <Paper className={classes.root}>
      <Typography variant="h5">Add user</Typography>
      <Box mt={theme.spacing(1)} display="flex">
        <TextField placeholder="name" variant="outlined" />
        <TextField placeholder="email" variant="outlined" className={classes.inputField}/>
        <TextField placeholder="last name" variant="outlined" className={classes.inputField}/>
      </Box>
      <Box mt={theme.spacing(1)}>
        <TextField placeholder="company name" variant="outlined" className={classes.inputField}/>
        <TextField placeholder="company link" variant="outlined" className={classes.inputField}/>
        <TextField variant="outlined" type="file" className={classes.inputField} />
      </Box>
      <Button variant="contained" color="primary" className={classes.addbtn} onClick={addHandler}>Add user</Button>
    </Paper>
  );
};

export default AddUser;
