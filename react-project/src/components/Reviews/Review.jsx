import { useState } from 'react';
import { Avatar, Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';

export const Review = ({ data }) => {
  const [isDefaultAvatar, setIsDefaulsAvatar] = useState(false);

  const { updated_at, content, author_details } = data;

  const { avatar_path, username, rating } = author_details;

  const avatarStyle = { width: 100, height: 100, marginRight: 5 };

  const buildAvatar = (url) => {
    console.log(url);
    if (url === null) return setIsDefaulsAvatar(true);
    if (url.slice(0, 6) === '/https') return url.slice(1);
    return `https://image.tmdb.org/t/p/w185${url}`;
  };
  const transformDate = (date) =>
    date.slice(0, 10).split('-').reverse().join(' ');

  return (
    <Box sx={{ display: 'flex', marginTop: 5, marginBottom: 5 }}>
      <Box>
        {isDefaultAvatar ? (
          <PersonIcon sx={avatarStyle} />
        ) : (
          <Avatar sx={avatarStyle} src={buildAvatar(avatar_path)} />
        )}
      </Box>
      <Box>
        <Rating name='customized-10' value={rating} max={10} readOnly />
        <Typography variant='h6'>{username}</Typography>{' '}
        <Typography variant='subtitle2' color='primary'>
          {transformDate(updated_at)}
        </Typography>
        <Typography variant='body2'>{content}</Typography>
      </Box>
    </Box>
  );
};
