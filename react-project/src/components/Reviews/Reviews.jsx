import { useEffect, useState } from 'react';
import { Review } from './Review';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { API_KEY } from '../../data';
import axios from 'axios';

export const Reviews = ({ id, mediaType }) => {
  const [reviewsData, setReviewsData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => setReviewsData(res.data));
  }, [id]);

  return (
    <>
      <Typography variant='h5'>Reviews</Typography>
      {reviewsData && (
        <Box>
          {reviewsData.results.map((item) => (
            <Review key={item.id} data={item} />
          ))}
        </Box>
      )}
    </>
  );
};
