import './Reviews.css';
export const Review = ({ data }) => {
  const {
    updated_at,
    content,
    author_details: { avatar_path, name, rating, username },
  } = data;
  const avatar = (url) => {
    if (url === null) return '../../../Public/DefaultAvatar.svg';
    if (url.slice(0, 6) === '/https') return url.slice(1);
    return `https://image.tmdb.org/t/p/w185${url}`;
  };
  const transformDate = (date) =>
    date.slice(0, 10).split('-').reverse().join(' ');

  return (
    <div className='review'>
      <div>
        <img className='review-avatar' src={avatar(avatar_path)} />
      </div>
      <div>
        <h4 className='username'>{username}</h4>
        <span className='review-date'>{transformDate(updated_at)}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};
