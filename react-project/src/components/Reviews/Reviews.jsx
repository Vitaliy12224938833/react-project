import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography, styled, Paper } from '@mui/material';

import { Review } from './Review';
import { useFetchData } from '../../HOOKs/useFetchData';
import { Loader } from '../Loader/Loader';
// create a styled component for the container
const Container = styled(Box)({
  marginTop: '2rem',
  padding: '1rem',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
});

const Reviews = React.memo(({ id, mediaType }) => {
  const params = {
    mediaType: mediaType,
    id: id,
    dataType: 'reviews',
    language: 'en-US',
    page: 1,
  };
  const [data, isLoading, setParams] = useFetchData(params);

  useEffect(() => {
    setParams({ ...params, mediaType: mediaType, id: id });
  }, [mediaType, id]);

  if (!isLoading) return <Loader />;
  return (
    data.results.length !== 0 && (
      <Paper>
        <Container>
          <Typography variant='h5'>Reviews</Typography>
          <Box>
            {data.results.map((item) => (
              <Review key={item.id} data={item} />
            ))}
          </Box>
        </Container>
      </Paper>
    )
  );
});

export default Reviews;
