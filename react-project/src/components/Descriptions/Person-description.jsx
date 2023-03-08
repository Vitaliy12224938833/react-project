import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Table } from '@mui/material/';
import { TableBody } from '@mui/material/';
import { TableCell } from '@mui/material/';
import { TableContainer } from '@mui/material/';
import { TableRow } from '@mui/material/';
import { Paper } from '@mui/material/';
import { Link } from '@mui/material';
import { CustomImg } from '../CustomImg/CustomImg';

export const PersonDerscription = ({ data }) => {
  const createLink = (link) => link && <Link href={link}>{link}</Link>;

  const cahangeDate = (date) => date && date.split('-').reverse().join(' ');

  const dataArray = [
    { description: cahangeDate(data.birthday), caption: 'Birthday:' },
    { description: cahangeDate(data.deathday), caption: 'Deathday:' },
    { description: data.place_of_birth, caption: 'Place of birth:' },
    { description: createLink(data.homepage), caption: 'Homepage:' },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', maxHeight: 1000 }}>
        <CustomImg
          src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
          alt={data.name}
          width='auto'
        />
        <Box sx={{ marginLeft: 20 }}>
          <Typography variant='h3' sx={{ marginBottom: 10 }}>
            {data.name}
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {dataArray.map(
                  (item) =>
                    item.description !== null && (
                      <TableRow>
                        <TableCell>{item.caption}</TableCell>
                        <TableCell>{item.description}</TableCell>
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Paper
        sx={{ padding: 5, marginTop: 5, marginBottom: 5 }}
        variant='elevation'
      >
        <Typography variant='body1'>
          {data.biography || `Don't have any information about ${data.name}.`}
        </Typography>
      </Paper>
    </>
  );
};
