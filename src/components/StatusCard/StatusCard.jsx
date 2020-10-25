import { Box, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ProgressBar from 'components/ProgressBar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: 10,
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  progress: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  items: {
    width: ' 100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const StatusCard = ({ color, type, count }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined" style={{ backgroundColor: `${color}` }}>
      <CardContent className={classes.items}>
        <Typography variant="h5" component="h2">
          All {type} : {count}
        </Typography>
        <Box className={classes.progress}>
          <ProgressBar count={count} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
