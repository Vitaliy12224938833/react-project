import React from 'react';
import { Box } from '@mui/system';
import { styled, Table, TableBody, TableContainer } from '@mui/material';

import { CustomImg } from '../CustomImg/CustomImg';
import { CustomDescriptionRow } from './CustomDescriptinoRow';
import { DescriptionOverview } from './components/DescriptionOverview';
import { DescriptionTitle } from './components/DescriptionTitle';
import { CustomDescriptionBox } from './components/CustomDescriptionBox';
import { ComponentWrapper } from '../Wrappers/ComponentWrapper';
import { transformMoney } from '../../utils/transformMoney.mjs';
import { transformRuntime } from '../../utils/transformRuntime.mjs';
import { createStrWithNameFromData } from '../../utils/createStrWithNameFromData.mjs';
import { transformDate } from '../../utils/transformDate.mjs';
const StyledTableContainer = styled(TableContainer)({
  maxHeight: 1000,
});

const TableWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: { maxWidth: '50%' },
}));

const Description = React.memo(({ data, isSeason = false }) => {
  const dataArray = [
    { description: transformRuntime(data.runtime), caption: 'Runetime:' },
    {
      description: createStrWithNameFromData(data.production_countries),
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
    { description: createStrWithNameFromData(data.genres), caption: 'Genres:' },
  ];

  return (
    <ComponentWrapper>
      <CustomDescriptionBox>
        <CustomImg
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={data.title}
          maxWidth='500px'
        />
        <TableWrapper>
          <DescriptionTitle variant='h4'>
            {data.title || data.name}
          </DescriptionTitle>
          <StyledTableContainer>
            <Table>
              <TableBody>
                {dataArray.map(
                  ({ description, caption }, i) =>
                    !!description && (
                      <CustomDescriptionRow
                        key={i}
                        caption={caption}
                        description={description}
                      />
                    )
                )}
              </TableBody>
            </Table>
          </StyledTableContainer>
        </TableWrapper>
      </CustomDescriptionBox>
      {isSeason && <DescriptionOverview overview={data.overview} />}
      {!isSeason && <DescriptionOverview overview={data.overview} />}
    </ComponentWrapper>
  );
});
export default Description;
