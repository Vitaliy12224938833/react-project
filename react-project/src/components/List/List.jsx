import { SearcMediaTypeContext } from '../../Context/Context';
import { ItemClassNameContext } from '../../Context/Context';
import { useContext } from 'react';
import { ListItem } from '../ListItem/ListItem';
import './List.css';

export const List = ({ data, className, listRef }) => {
  const itemClassName = useContext(ItemClassNameContext);
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
          return (
            <SearcMediaTypeContext.Provider value={media_type}>
              <ListItem
                key={id}
                id={id}
                title={title}
                character={character}
                name={name}
                img={poster_path || profile_path}
                className={itemClassName}
              />
            </SearcMediaTypeContext.Provider>
          );
      })}
    </ul>
  );
};
