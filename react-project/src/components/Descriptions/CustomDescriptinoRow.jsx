import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));
export const CustomDescriptionRow = React.memo(({ caption, description }) => (
  <TableRow>
    <StyledTableCell sx={{ fontSize: 25, fontWeight: 'bold' }}>
      {caption}
    </StyledTableCell>
    <StyledTableCell sx={{ fontSize: 25 }}>{description}</StyledTableCell>
  </TableRow>
));
