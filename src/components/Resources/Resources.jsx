import {
  Box,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import Pagination from 'components/Pagination/Pagination';
import React, { useState } from 'react';
import theme from 'theme';
import { useResources } from 'hooks/index';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginTop: theme.spacing(6),
  },
  table: {
    marginTop: theme.spacing(5),
  },
  image: {
    width: 50,
    height: 50,
  },
  icon: {
    color: '#000',
  },
  colorBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Resources = () => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading } = useResources(pageNumber);
  const totalPages = data?.total_pages;
  const resources = data?.data;
  const rowsLenght = data?.total;
  const nextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    } else return;
  };
  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    } else return;
  };
  if (isLoading) return <p>loading ....</p>;
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ textAlign: 'left' }}>
        Resource list
      </Typography>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Year</TableCell>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">Pantone Count</TableCell>
              <TableCell align="center">See resource</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resources?.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell component="th" scope="row">
                  {resource.id}
                </TableCell>
                <TableCell align="center">{resource.name}</TableCell>
                <TableCell align="center">{resource.year}</TableCell>
                <TableCell align="center">
                  <Box className={classes.colorBox}>
                    <Box style={{ height: 40, width: 100, backgroundColor: `${resource.color}`, borderRadius: 5 }}></Box>
                  </Box>
                </TableCell>
                <TableCell align="center">{resource.pantone_value}</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <Link to={`/resources/${resource.id}`} className={classes.icon}>
                      <VisibilityIcon />
                    </Link>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination items={rowsLenght} page={pageNumber - 1} handleNext={nextPage} handlePrev={prevPage} />
      </TableContainer>
    </div>
  );
};

export default Resources;
