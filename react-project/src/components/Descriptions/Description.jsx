import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Table } from '@mui/material/';
import { TableBody } from '@mui/material/';
import { TableContainer } from '@mui/material/';
import { Paper } from '@mui/material/';
import { CustomImg } from '../CustomImg/CustomImg';
import { CustomDescriptionRow } from '../CustomDescriptionRow/CustomDescriptinoRow';

export const Desciprion = ({ data }) => {
  const transformRuntime = (min) => {
    if (!min) return null;
    const hours = Math.floor(min / 60);
    const lastMin = min - hours * 60;
    return `${hours} hours ${lastMin} min`;
  };

  const transformMoney = (n) => {
    if (!n) return null;
    return (
      parseFloat(n)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ') + ' $'
    );
  };

  const createStrFromObj = (list) => {
    if (list.length === 0) return null;
    let StrList = '';
    list.forEach((item) => (StrList += item.name + ', '));
    return StrList.slice(0, -2);
  };

  const transfomrDate = (date) => data && date.split('-').reverse().join(' ');

  const dataArray = [
    { description: transformRuntime(data.runtime), caption: 'Runetime:' },
    {
      description: createStrFromObj(data.production_countries),
      caption: 'Contry:',
    },
    {
      description: transfomrDate(data.release_date || data.first_air_date),
      caption: 'Relis:',
    },
    { description: data.status, caption: 'Status:' },
    { description: data.vote_average, caption: 'Rating:' },
    { description: transformMoney(data.budget), caption: 'Budget:' },
    { description: transformMoney(data.revenue), caption: 'Revenue:' },
    { description: createStrFromObj(data.genres), caption: 'Genres:' },
  ];

  return (
    <Box sx={{ marginTop: 20 }}>
      <Box sx={{ display: 'flex', maxHeight: 1000 }}>
        <CustomImg
          width={'auto'}
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
        />
        <Box sx={{ marginLeft: 20 }}>
          <Typography variant='h4' sx={{ marginBottom: 10 }}>
            {data.title || data.name}
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {dataArray.map(
                  (item, i) =>
                    !!item.description && (
                      <CustomDescriptionRow
                        key={i}
                        caption={item.caption}
                        description={item.description}
                      />
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
        <Typography variant='body1'>{data.overview}</Typography>
      </Paper>
    </Box>
  );
};
