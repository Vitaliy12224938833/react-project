import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Table } from '@mui/material/';
import { TableBody } from '@mui/material/';
import { TableCell } from '@mui/material/';
import { TableContainer } from '@mui/material/';
import { TableRow } from '@mui/material/';
import { Paper } from '@mui/material/';
import { Link } from '@mui/material';
import { Loader } from '../Loader/Loader';

export const PersonDerscription = ({ data }) => {
  if (!data) return <Loader />;

  const createLink = (link) => <Link href={link}>{link}</Link>;
  const cahangeDate = (date) => date && date.split('-').reverse().join(' ');

  const dataArray = [
    { description: cahangeDate(data.birthday), caption: 'Birthday:' },
    { description: cahangeDate(data.deathday), caption: 'Deathday:' },
    { description: data.place_of_birth, caption: 'Place of birth:' },
    { description: createLink(data.homepage), caption: 'Homepage:' },
  ];

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <img
          className='poster'
          src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
          alt={data.name}
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
        <Typography variant='body1'>{data.biography}</Typography>
      </Paper>
    </>
  );
};
