import './List.css';
export const List = ({ data, className, children, listRef }) => {
  return (
    <ul className={className} ref={listRef}>
      {data.map((item) => {
        const { id, title, character, poster_path, name, profile_path } = item;
        if (poster_path || profile_path)
          return children(
            id,
            title || character,
            poster_path || profile_path,
            name
          );
      })}
    </ul>
  );
};
