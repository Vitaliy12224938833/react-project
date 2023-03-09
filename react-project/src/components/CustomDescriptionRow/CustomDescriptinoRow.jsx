import { TableRow, TableCell } from '@mui/material';

export const CustomDescriptionRow = ({ caption, description }) => (
  <TableRow>
    <TableCell sx={{ fontSize: 25, fontWeight: 'bold' }}>{caption}</TableCell>
    <TableCell sx={{ fontSize: 25 }}>{description}</TableCell>
  </TableRow>
);
