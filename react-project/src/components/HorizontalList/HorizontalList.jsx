import { ListItem } from '../ListItem/ListItem';
import './HorizontalList.css';

export const HorizontalList = ({ data, content, category }) => {
  return (
    <div calssName='horizontal-list-conteiner'>
      <h3>{category}</h3>
      <button onClick={() => getList('left')}>left</button>
      <ul className='horizontal-list'>
        {data.map((item) => {
          const { id, title, poster_path, name } = item;
          return (
            <>
              {poster_path && (
                <ListItem
                  key={id}
                  className={'horizontal-list-item'}
                  id={id}
                  img={poster_path}
                  name={title || name}
                  categories={[content, category]}
                />
              )}
            </>
          );
        })}
      </ul>
      <button onClick={() => getList('right')}>rigth</button>
    </div>
  );
};
