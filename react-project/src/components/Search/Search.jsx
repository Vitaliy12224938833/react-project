import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

export const Search = ({ content }) => {
  const [query, setQuery] = useState('');
  const handelChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='search-conteiner'>
      <div className='search'>
        {query && <Link to={`/search/${content}/${query}`}>Seach</Link>}
        <input type='text' onChange={handelChange} placeholder='search' />
      </div>
    </div>
  );
};
