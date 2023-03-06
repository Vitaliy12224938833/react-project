import { useEffect, useState } from 'react';
import { Review } from './Review';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import axios from 'axios';
const API_KEY = '1f63914a91cb95d33f7d8d413f4c28ca';

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
