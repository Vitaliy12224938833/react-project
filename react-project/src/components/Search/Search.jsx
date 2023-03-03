import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

export const Search = () => {
  const [query, setQuery] = useState('');
  const handelChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className='search-conteiner'>
      <form className='search' action={query ? `/search/multi/${query}` : null}>
        <input type='text' onChange={handelChange} placeholder='search' />
        <Link
          className={`search-link ${query ? 'active' : ''}`}
          to={query ? `/search/multi/${query}` : null}
        >
          search
        </Link>
      </form>
    </div>
  );
};
