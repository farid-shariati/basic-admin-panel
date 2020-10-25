import { TablePagination } from '@material-ui/core';
import React from 'react';

const Pagination = ({ items, handleNext, handlePrev, page }) => {


  return (
    <TablePagination
      count={items}
      page={page}
      rowsPerPage={6}
      onChangePage={() => null}
      rowsPerPageOptions={[]}
      nextIconButtonProps={{
        'aria-label': 'Next Page',
        onClick: handleNext,
      }}
      backIconButtonProps={{
        'aria-label': 'Previous Page',
        onClick: handlePrev,
      }}
    />
  );
};

export default Pagination;
