export const List = ({ data, className, children, listRef }) => {
  return (
    <ul className={className} ref={listRef}>
      {data.map((item) => {
        const { id, title, poster_path, name } = item;
        return children(id, title, poster_path, name);
      })}
    </ul>
  );
};
