import './List.css';
export const List = ({ data, className, children, listRef }) => {
  const idArray = [];
  return (
    <ul className={className} ref={listRef}>
      {data.map((item, idx) => {
        if (idx >= 1) idArray.push(data[idx - 1].id);
        const {
          id,
          title,
          character,
          poster_path,
          name,
          profile_path,
          media_type,
        } = item;
        if ((poster_path || profile_path) && !idArray.includes(id))
          return children(
            id,
            title || character,
            poster_path || profile_path,
            name,
            media_type
          );
      })}
    </ul>
  );
};
