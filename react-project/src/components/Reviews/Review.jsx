import React, { useState } from 'react';
import { Avatar, Typography, Rating, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';
import { transformDateForReview } from '../../utils/transformDateForReview.mjs';
const ReviewContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  flexDirection: 'row',
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(2),
  },
}));

const AvatarStyle = (theme) => ({
  width: 100,
  height: 100,
  [theme.breakpoints.down('md')]: {
    width: 75,
    height: 75,
  },
  [theme.breakpoints.down('sm')]: {
    width: 50,
    height: 50,
  },
});

const AvatarImage = styled(Avatar)(({ theme }) => AvatarStyle(theme));

const StyledAnonimAvatar = styled(PersonIcon)(({ theme }) =>
  AvatarStyle(theme)
);

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledRating = styled(Rating)(({ theme }) => ({
  fontSize: '1.3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const Username = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.1rem',
  marginRight: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const DateCaption = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: '0.9rem',
  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(1),
    fontSize: '0.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(1),
    fontSize: '0.5rem',
  },
}));

const ReviewText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: '1rem',
  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(1),
    fontSize: '0.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(1),
    fontSize: '0.6rem',
  },
}));

export const Review = React.memo(({ data }) => {
  if (!data.author_details) return null;
  const [isDefaultAvatar, setIsDefaultAvatar] = useState(false);

  const { updated_at, content, author_details } = data;
  const { avatar_path, username, rating } = author_details;

  const buildAvatar = (url) => {
    if (url === null) return setIsDefaultAvatar(true);
    if (url.slice(0, 6) === '/https') return url.slice(1);
    return `https://image.tmdb.org/t/p/w185${url}`;
  };

  return (
    <ReviewContainer>
      <AvatarContainer>
        {isDefaultAvatar ? (
          <StyledAnonimAvatar />
        ) : (
          <AvatarImage src={buildAvatar(avatar_path)} />
        )}
      </AvatarContainer>
      <ContentContainer>
        <StyledRating name='customized-10' value={rating} max={10} readOnly />
        <Typography variant='subtitle1'>
          <Username>{username}</Username>
          <DateCaption color='primary'>
            {transformDateForReview(updated_at)}
          </DateCaption>
        </Typography>
        <ReviewText>{content}</ReviewText>
      </ContentContainer>
    </ReviewContainer>
  );
});
