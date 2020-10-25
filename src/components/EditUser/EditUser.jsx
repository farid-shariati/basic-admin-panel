import { Avatar, Box, Button, IconButton, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import theme from 'theme';
import { useUpdateUser, useUser } from 'hooks';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '65vh',
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstRow: {
    display: 'flex',
  },
  inputField: {
    marginLeft: theme.spacing(5),
  },
  addbtn: {
    marginTop: theme.spacing(10),
  },
  avatar: {
    marginLeft: theme.spacing(5),
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  back: {
    color: '#000',
  },
});
const EditUser = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { data } = useUser(id);
  const basicInfo = data?.data;
  const adInfo = data?.ad;
  const { enqueueSnackbar } = useSnackbar();
  const [update] = useUpdateUser();
  // reackt hook form
  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    await update({ id, ...data });
    enqueueSnackbar('user edited');
  };
  return (
    <Paper className={classes.root}>
      <IconButton>
        <Link to="/users" className={classes.back}>
          <ArrowBackIcon className={classes.iconStyle} />
        </Link>
      </IconButton>
      <Box className={classes.firstRow}>
        <Typography variant="h5">Edit user</Typography>
        <Avatar alt="Remy Sharp" src={basicInfo?.avatar} className={classes.avatar} />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.items}>
        <Box mt={theme.spacing(1)} display="flex">
          <TextField label={basicInfo?.first_name} name="frist_name" variant="outlined" inputRef={register} />
          <TextField name="email" label={basicInfo?.email} variant="outlined" inputRef={register} className={classes.inputField} />
          <TextField label={basicInfo?.last_name} name="last_name" variant="outlined" inputRef={register} className={classes.inputField} />
        </Box>
        <Box mt={theme.spacing(1)}>
          <TextField label={adInfo?.company} name="company" variant="outlined" inputRef={register} className={classes.inputField} />
          <TextField label={adInfo?.url} name="url" variant="outlined" inputRef={register} className={classes.inputField} />
          <TextField type="file" variant="outlined" inputRef={register} className={classes.inputField} />
        </Box>
        <Button variant="contained" color="primary" className={classes.addbtn} type="submit">
          Edit user
        </Button>
      </form>
    </Paper>
  );
};

export default EditUser;
