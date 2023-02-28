import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Search = ({ content }) => {
  const [query, setQuery] = useState('');

  console.log(query);
  const handelChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input type='text' onChange={handelChange}></input>
      {query && <Link to={`/search/${content}/${query}`}>Seach</Link>}
    </div>
  );
};
