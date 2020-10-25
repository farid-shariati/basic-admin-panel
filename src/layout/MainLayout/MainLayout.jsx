import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import NavigationDrawer from 'components/Drawer';
import StatusCards from 'components/StatusCards/StatusCards';
import theme from 'theme';
import { drawerWidth } from 'components/Drawer/NavigationDrawer';
import { withAuth } from 'libs/withAuth';

const useStyles = makeStyles({
  content: {
    marginLeft: drawerWidth,
    padding: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
});

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Box>
      <NavigationDrawer />
      <div className={classes.content}>
        <StatusCards />
        {children}
      </div>
    </Box>
  );
};

export default withAuth(MainLayout);
