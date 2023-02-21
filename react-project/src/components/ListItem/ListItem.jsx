import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ListItem = ({ id, img, name, categories }) => {
  const [content, category] = categories;
  return (
    <li key={id}>
      <Link to={`/${content}/${category}/${name}/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w300${img}`} alt={name} />
      </Link>
    </li>
  );
};
