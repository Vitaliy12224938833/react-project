import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import { ListItem } from '../ListItem/ListItem';
import './HorizontalList.css';
import { List } from '../List/List';
export const HorizontalList = ({ data, title, content, category }) => {
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();
  const filtredData = data.filter((item) => item.poster_path);

  useEffect(() => {
    listRef.current.style.transform = `translateX(0px)`;
  }, [data]);

  const handleClick = (direction) => {
    setIsMoved(true);
    setTimeout(() => {
      setIsMoved(false);
    }, 550);

    let distance = listRef.current.getBoundingClientRect().x - 65.5078125;

    if (direction === 'left' && distance < 0) {
      listRef.current.style.transform = `translateX(${Math.floor(
        930 + distance
      )}px)`;
    }
    if (direction === 'right' && distance > -(232.5 * filtredData.length)) {
      listRef.current.style.transform = `translateX(${Math.floor(
        distance - 930
      )}px)`;
    }
  };

  return (
    <>
      {filtredData.length > 0 && (
        <div className='horizontal-list-conteiner'>
          <h3 className='title'>{title}</h3>
          <div className='horizontal-list-wrap'>
            <div
              className='horizont-list-button left'
              onClick={!isMoved ? () => handleClick('left') : () => {}}
            >
              ❰
            </div>
            <List
              className='horizontal-list'
              data={filtredData}
              listRef={listRef}
            >
              {(id, title, poster_path, name) => (
                <ListItem
                  key={id}
                  className={'horizontal-list-item'}
                  id={id}
                  img={poster_path}
                  name={title || name}
                  categories={[content, category]}
                />
              )}
            </List>
            <div
              className='horizont-list-button right'
              onClick={!isMoved ? () => handleClick('right') : () => {}}
            >
              ❱
            </div>
          </div>
        </div>
      )}
    </>
  );
};
