import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Table } from '@mui/material/';
import { TableBody } from '@mui/material/';
import { TableContainer } from '@mui/material/';
import { Paper } from '@mui/material/';

import { CustomImg } from '../CustomImg/CustomImg';
import { CustomDescriptionRow } from './CustomDescriptinoRow';
import { createLink } from './src/description-src';
import { transformDate } from './src/description-src';

export const PersonDerscription = ({ data }) => {
  const dataArray = [
    { description: transformDate(data.birthday), caption: 'Birthday:' },
    { description: transformDate(data.deathday), caption: 'Deathday:' },
    { description: data.place_of_birth, caption: 'Place of birth:' },
    { description: createLink(data.homepage), caption: 'Homepage:' },
  ];

  return (
    <Box sx={{ marginTop: 20 }}>
      <Box sx={{ display: 'flex', maxHeight: 1000 }}>
        <CustomImg
          src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
          alt={data.name}
          width='auto'
        />
        <Box sx={{ marginLeft: 20 }}>
          <Typography variant='h4' sx={{ marginBottom: 10 }}>
            {data.name}
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
        <Typography variant='body1'>
          {data.biography || `Don't have any information about ${data.name}.`}
        </Typography>
      </Paper>
    </Box>
  );
};
