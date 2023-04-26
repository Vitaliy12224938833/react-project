import React, { useEffect } from 'react';
import { Rating } from '@mui/material';
import { Card, CardContent, Typography, Box } from '@mui/material';

import { useFetchData } from '../../HOOKs/useFetchData';
import { styled } from '@mui/material/styles';
import { CustomImg } from '../common/CustomImg';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

const StyledCard = styled(Card)(({ theme }) => ({
  height: 340,
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px 0',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    height: 230,
    margin: '15px 0',
  },
}));

const StyledContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

const StyledRating = styled(Rating)(({ theme }) => ({
  fontSize: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.7rem',
  },
}));
const StyledReleaseDate = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.6rem',
  },
}));
const DateAndCountryWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  [theme.breakpoints.down('md')]: {
    gap: 0,
  },
}));
const StyledCountry = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.6rem',
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 4,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.7rem',
    WebkitLineClamp: 3,
  },
}));

const CustomImgWrapper = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '300px',
  [theme.breakpoints.down('md')]: {
    height: '200px',
    width: '135px',
  },
}));

export const MediaPageCard = React.memo(({ mediaType, id }) => {
  const params = { mediaType: mediaType, id: id, language: 'en-US' };

  const [pageData, isLoading, setParams, setLoding] = useFetchData(params);

  useEffect(() => {
    setParams({ ...params, mediaType: mediaType, id: id });
    setLoding(false);
  }, [id]);

  if (!isLoading) return <Loader />;
  const {
    poster_path,
    title,
    vote_average,
    release_date,
    overview,
    production_countries,
    name,
  } = pageData;

  return (
    <StyledCard>
      <Link to={`/${mediaType}/${title || name}/${id}`}>
        <CustomImgWrapper>
          <CustomImg src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
        </CustomImgWrapper>
      </Link>
      <StyledContent>
        <div>
          <StyledTitle>
            <Link
              style={{ color: 'black' }}
              to={`/${mediaType}/${title || name}/${id}`}
            >
              {title || name}
            </Link>
          </StyledTitle>
          <StyledRating value={vote_average / 2} readOnly={true} />
          <DateAndCountryWrapper>
            <StyledReleaseDate>{release_date}</StyledReleaseDate>
            <StyledCountry variant='body2' color='text.secondary'>
              {production_countries[0].name}
            </StyledCountry>
          </DateAndCountryWrapper>
        </div>
        <StyledDescription variant='body2' color='text.secondary'>
          {overview}
        </StyledDescription>
      </StyledContent>
    </StyledCard>
  );
});
