import React from 'react';
import { Box } from '@mui/system';
import { Table, TableBody, TableContainer, styled } from '@mui/material';

import { CustomImg } from '../CustomImg/CustomImg';
import { CustomDescriptionRow } from './CustomDescriptinoRow';
import { createLink, transformDate } from './src/description-src';
import { DescriptionOverview } from './components/DescriptionOverview';
import { DescriptionTitle } from './components/DescriptionTitle';
import { CustomDescriptionBox } from './components/CustomDescriptionBox';
import { ComponentWrapper } from '../Wrappers/ComponentWrapper';

const PersonDescriptionTable = styled(Table)({
  marginTop: 1,
});

const PersonDescriptionTableRow = styled(CustomDescriptionRow)({
  '&:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
});

export const PersonDescription = ({ data }) => {
  const descriptionData = [
    { description: transformDate(data.birthday), caption: 'Birthday:' },
    { description: transformDate(data.deathday), caption: 'Deathday:' },
    { description: data.place_of_birth, caption: 'Place of birth:' },
    { description: createLink(data.homepage), caption: 'Homepage:' },
  ];

  return (
    <ComponentWrapper>
      <CustomDescriptionBox>
        <CustomImg
          src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
          alt={data.name}
          maxWidth='500px'
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <DescriptionTitle>{data.name}</DescriptionTitle>
          <TableContainer>
            <PersonDescriptionTable>
              <TableBody>
                {descriptionData.map(
                  (item, i) =>
                    !!item.description && (
                      <PersonDescriptionTableRow
                        key={i}
                        caption={item.caption}
                        description={item.description}
                      />
                    )
                )}
              </TableBody>
            </PersonDescriptionTable>
          </TableContainer>
        </Box>
      </CustomDescriptionBox>
      {data.biography && <DescriptionOverview overview={data.biography} />}
      {!data.biography && (
        <DescriptionOverview
          overview={`Don't have any information about ${data.name}.`}
        />
      )}
    </ComponentWrapper>
  );
};
