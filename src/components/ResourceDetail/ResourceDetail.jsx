import { Box, Card, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import theme from 'theme';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import { useResource } from 'hooks/index';

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
  },
  back: {
    color: "#fff"
  }
});

const ResourceDetail = () => {
  const { id } = useParams();
  const { data } = useResource(id);
  const basicInfo = data?.data;
  const adInfo = data?.ad;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box className={classes.backArrow} display="flex" alignItems="flex-start">
        <IconButton>
          <Link to="/resources" className={classes.back}><ArrowBackIcon /></Link>
        </IconButton>
      </Box>
      <Box className={classes.information}>
        <Typography variant="h5">{basicInfo?.id}</Typography>
        <Typography className={classes.infoText}>{basicInfo?.name}</Typography>
        <Typography className={classes.infoText}>{basicInfo?.year}</Typography>
        <Typography className={classes.infoText}>{basicInfo?.color}</Typography>
        <Typography className={classes.infoText}>{basicInfo?.pantone_value}</Typography>
        <Typography className={classes.infoText}>{adInfo?.company}</Typography>
        <Typography className={classes.infoText}>{adInfo?.url}</Typography>
        <Typography className={classes.infoText}>{adInfo?.text}</Typography>
      </Box>
    </Card>
  );
};

export default ResourceDetail;
