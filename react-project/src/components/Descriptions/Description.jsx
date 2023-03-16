import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Table } from '@mui/material/';
import { TableBody } from '@mui/material/';
import { TableContainer } from '@mui/material/';
import { Paper } from '@mui/material/';

import { CustomImg } from '../CustomImg/CustomImg';
import { CustomDescriptionRow } from './CustomDescriptinoRow';
import { transformDate } from './src/description-src';
import { transformRuntime } from './src/description-src';
import { transformMoney } from './src/description-src';
import { createStrFromObj } from './src/description-src';

export const Desciprion = React.memo(({ data, isSeason = false }) => {
  const dataArray = [
    { description: transformRuntime(data.runtime), caption: 'Runetime:' },
    {
      description: createStrFromObj(data.production_countries),
      caption: 'Contry:',
    },
    {
      description: transformDate(
        data.release_date || data.first_air_date || data.air_date
      ),
      caption: 'Relis:',
    },
    { description: data.status, caption: 'Status:' },
    { description: data.vote_average, caption: 'Rating:' },
    { description: transformMoney(data.budget), caption: 'Budget:' },
    { description: transformMoney(data.revenue), caption: 'Revenue:' },
    { description: createStrFromObj(data.genres), caption: 'Genres:' },
  ];

  const Overview = ({ overview }) => (
    <Paper
      sx={{
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
      }}
      variant='elevation'
    >
      <Typography variant='body1'>{overview}</Typography>
    </Paper>
  );

  return (
    <Box sx={{ marginTop: 20 }}>
      <Box sx={{ display: 'flex', maxHeight: 1000 }}>
        <CustomImg
          width='500px'
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
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
          {isSeason && <Overview overview={data.overview} />}
        </Box>
      </Box>
      {!isSeason && <Overview overview={data.overview} />}
    </Box>
  );
});
