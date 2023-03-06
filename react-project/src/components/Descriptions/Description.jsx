import './Description.css';
import { Tab, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Desciprion = ({ data }) => {
  const getRuntime = (min) => {
    const hours = Math.floor(min / 60);
    const lastMin = min - hours * 60;
    return `${hours} hours ${lastMin} min`;
  };

  const makeMoney = (n) =>
    parseFloat(n)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ') + ' $';

  const createStrFromObj = (list) => {
    let StrList = '';
    list.forEach((item) => (StrList += item.name + ', '));
    return StrList.slice(0, -2);
  };

  const cahangeDate = (date) => date.split('-').reverse().join(' ');

  const dataArray = [
    { description: getRuntime(data.runtime), caption: 'Runetime:' },
    {
      description: createStrFromObj(data.production_countries),
      caption: 'Contry:',
    },
    { description: cahangeDate(data.release_date), caption: 'Relis:' },
    { description: data.status, caption: 'Status:' },
    { description: data.vote_average, caption: 'Rating:' },
    { description: makeMoney(data.budget), caption: 'Budget:' },
    { description: data.revenue, caption: 'Revenue:' },
    { description: createStrFromObj(data.genres), caption: 'Genres:' },
  ];

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <img
          className='poster'
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
        />
        <Box sx={{ marginLeft: 20 }}>
          <Typography variant='h3' sx={{ marginBottom: 10 }}>
            {data.title}
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {dataArray.map((item) => (
                  <TableRow>
                    <TableCell>{item.caption}</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Paper
        sx={{ padding: 5, marginTop: 5, marginBottom: 5 }}
        variant='elevation'
      >
        <Typography variant='body1'>{data.overview}</Typography>
      </Paper>
    </>
  );
};
