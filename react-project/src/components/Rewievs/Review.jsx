import { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import './Reviews.css';

export const Review = ({ data }) => {
  const [isDefaultAvatar, setIsDefaulsAvatar] = useState(false);

  const { updated_at, content, author_details } = data;
  const { avatar_path, username } = author_details;

  const buildAvatar = (url) => {
    console.log(url);
    if (url === null) return setIsDefaulsAvatar(true);
    if (url.slice(0, 6) === '/https') return url.slice(1);
    return `https://image.tmdb.org/t/p/w185${url}`;
  };
  const transformDate = (date) =>
    date.slice(0, 10).split('-').reverse().join(' ');

  return (
    <div className='review'>
      <div>
        {isDefaultAvatar ? (
          <BsFillPersonFill className='review-avatar' />
        ) : (
          <img className='review-avatar' src={buildAvatar(avatar_path)} />
        )}
      </div>
      <div>
        <h4 className='username'>{username}</h4>
        <span className='review-date'>{transformDate(updated_at)}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};
