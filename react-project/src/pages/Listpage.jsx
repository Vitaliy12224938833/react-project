import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { ItemClassNameContext } from '../Context/Context';
import { List } from '../components/List/List';
import { API_KEY } from '../data';
import { MediaTypeForLinkContext } from '../Context/Context';
export const Listpage = () => {
  const { mediaType, category } = useParams();
  const [page, setPage] = useState(1);
  const defaultMediaType = mediaType ? mediaType : 'movie';
  const defaultCategory = category ? category : 'popular';

  const url = `https://api.themoviedb.org/3/${defaultMediaType}/${defaultCategory}?api_key=${API_KEY}&language=en-US&page=${page}`;

  const [list, loader] = useInfinityList(
    url,
    page,
    setPage,
    mediaType,
    category
  );

  return (
    <div className='list-conteiner'>
      <MediaTypeForLinkContext.Provider value={defaultMediaType}>
        <ItemClassNameContext.Provider value='list-item'>
          {list && <List data={list} className={'content-list'}></List>}
        </ItemClassNameContext.Provider>
      </MediaTypeForLinkContext.Provider>
      {loader && <div className='loader'>Loading....</div>}
    </div>
  );
};
