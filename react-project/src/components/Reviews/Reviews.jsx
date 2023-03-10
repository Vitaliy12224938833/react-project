import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { Review } from './Review';
import { API_KEY } from '../../data';

export const Reviews = ({ id, mediaType }) => {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => setReviewsList(res.data.results));
  }, [id]);

  return (
    reviewsList.length !== 0 && (
      <Box>
        <Typography variant='h5'>Reviews</Typography>
        <Box>
          {reviewsList.map((item) => (
            <Review key={item.id} data={item} />
          ))}
        </Box>
      </Box>
    )
  );
};
