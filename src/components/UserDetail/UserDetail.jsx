import { Box, Card, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import theme from 'theme';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import { useUser } from 'hooks/index';
import { useDeleteUser } from 'hooks/index';
import history from 'helpers/history'
import { useSnackbar } from 'notistack';

const useStyles = makeStyles({
  root: {
    marginTop: theme.spacing(6),
    width: '100%',
    height: '60vh',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
    display: 'flex',
    padding: theme.spacing(3),
    flexDirection: 'column',
    color: 'white',
  },
  firstRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  imageBox: {
    width: 100,
    height: 100,
    display: 'flex',
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(5),
  },
  infoText: {
    marginTop: theme.spacing(2),
    textAlign: 'start',
  },
  link: {
    color: '#fff',
  },
  iconStyle: {
    color:"#fff"
  }
});

const UserDetail = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const { data, isLoading } = useUser(id);
  const [remove] = useDeleteUser(1);
  const basicInfo = data?.data;
  const adInfo = data?.ad;
  const deleteHandler = (id) => {
    remove(id)
    enqueueSnackbar('user deleted');
    history.push('/users')
  }
  if (isLoading) return <p>loading ...</p>;
  return (
    <Card className={classes.root}>
      <Box className={classes.backArrow} display="flex" alignItems="flex-start">
        <IconButton>
          <Link to="/users">
            <ArrowBackIcon className={classes.iconStyle}/>
          </Link>
        </IconButton>
      </Box>
      <Box className={classes.firstRow}>
        <Box className={classes.imageBox}>
          <CardMedia image={basicInfo?.avatar} className={classes.profilePic} />
        </Box>
        <Box>
          <IconButton onClick={() => deleteHandler(basicInfo.id)}>
            <DeleteIcon className={classes.iconStyle}/>
          </IconButton>
          <IconButton>
            <Link to={`/edit/${basicInfo.id}`} className={classes.link}>
              <EditIcon />
            </Link>
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.information}>
        <Typography variant="h5">{basicInfo?.id}</Typography>
        <Typography className={classes.infoText}>{basicInfo?.first_name}</Typography>
        <Typography className={classes.infoText}>{basicInfo?.email}</Typography>
        <Typography className={classes.infoText}>{basicInfo?.last_name}</Typography>
        <Typography className={classes.infoText}>{adInfo?.company}</Typography>
        <Typography className={classes.infoText}>{adInfo?.url}</Typography>
        <Typography className={classes.infoText}>{adInfo?.text}</Typography>
      </Box>
    </Card>
  );
};

export default UserDetail;
