import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import { Typography, styled, Paper } from '@mui/material';

import { Review } from './Review';
import { API_KEY } from '../../data';

// create a styled component for the container
const Container = styled(Box)({
  marginTop: '2rem',
  padding: '1rem',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
});

export const Reviews = ({ id, mediaType }) => {
  const [reviewsList, setReviewsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
        );
        setReviewsList(res.data.results);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchReviews();
  }, [id, mediaType]);

  if (error) {
    return (
      <Container>
        <Typography variant='h5'>Error: {error}</Typography>
      </Container>
    );
  }

  return (
    reviewsList.length !== 0 && (
      <Paper>
        <Container>
          <Typography variant='h5'>Reviews</Typography>
          <Box>
            {reviewsList.map((item) => (
              <Review key={item.id} data={item} />
            ))}
          </Box>
        </Container>
      </Paper>
    )
  );
};
