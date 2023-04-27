import React, { useContext } from 'react';
import { Link, useResolvedPath } from 'react-router-dom';
import { styled } from '@mui/material';
import { DataContext } from '../../../Context/Context';
import { CustomImg } from '../../common/CustomImg';

const LinkStyled = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

export const LinkItem = () => {
  const [{ name, id, poster_path, profile_path, title }] =
    useContext(DataContext);
  const { pathname } = useResolvedPath();
  const mediaType = pathname.split('/')[1];

  return (
    <LinkStyled
      data-testid='link-item'
      to={`/${mediaType}/${name || title}/${id}`}
    >
      <CustomImg
        src={`https://image.tmdb.org/t/p/w300${poster_path || profile_path}`}
        alt={name}
      />
    </LinkStyled>
  );
};
