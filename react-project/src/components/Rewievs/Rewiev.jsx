export const Rewiev = ({ data }) => {
  const {
    id,
    content,
    author_details: { avatar_path, name, rating, username },
  } = data;
  const avatar = (url) => url.slice(1);

  return (
    <div>
      <h3>Rewievs</h3>
      <div>
        <img src={avatar(avatar_path)} />
        <h4>{username}</h4>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};
