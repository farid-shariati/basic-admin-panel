import {
  Avatar,
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
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDeleteUser, useUsers } from 'hooks/index';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import VisibilityIcon from '@material-ui/icons/Visibility';


const useStyles = makeStyles({
  root: {
    marginTop: theme.spacing(4),
  },
  table: {
    marginTop: theme.spacing(3),
  },
  image: {
    width: 50,
    height: 50,
  },
  link: {
    color: 'black',
  },
});

const Users = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [pageNumber, setPageNumber] = useState(1)
  const { data, isLoading } = useUsers(pageNumber);
  const [remove] = useDeleteUser(pageNumber)
  const users = data?.data;
  const rowsLenght = data?.total;
  const totalPages = data?.total_pages
  const nextPage = () => {
    if(pageNumber < totalPages){
      setPageNumber(pageNumber + 1)
    }else return
  }
  const prevPage = () => {
    if(pageNumber > 1){
      setPageNumber(pageNumber - 1)
    }else return
  }
  const deleteHandler = (id) => {
    remove(id)
    enqueueSnackbar('user deleted');
  }
  if (isLoading) return <p>loading...</p>;
  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ textAlign: 'left' }}>
        Users list
      </Typography>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Last name</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">See user</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user?.id}>
                <TableCell component="th" scope="row">
                  <Avatar src={user.avatar} className={classes.image} />
                </TableCell>
                <TableCell align="center">{user?.email}</TableCell>
                <TableCell align="center">{user?.id}</TableCell>
                <TableCell align="center">{user?.first_name}</TableCell>
                <TableCell align="center">{user?.last_name}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => deleteHandler(user?.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <Link to={`edit/${user?.id}`} className={classes.link}>
                    <EditIcon />
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <IconButton>
                    <Link to={`users/${user?.id}`} className={classes.link}>
                      <VisibilityIcon />
                    </Link>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination items={rowsLenght} page={pageNumber - 1} handleNext={nextPage} handlePrev={prevPage}/>
      </TableContainer>
    </div>
  );
};

export default Users;
