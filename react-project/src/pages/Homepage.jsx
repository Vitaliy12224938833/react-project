import axios from 'axios';
import { useState } from 'react';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { List } from '../components/List/List';
import { ListItem } from '../components/ListItem/ListItem';

export const Homepage = ({}) => {
  const [popularList, setPupularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [topList, setTop] = useState(null);

  // return (
  //   <div className='conteiner'>
  //     {castList && (
  //       <HorizontalList data={castList} title='Cast'>
  //         {(data, listRef, className) => (
  //           <List className={className} data={data} listRef={listRef}>
  //             {(id, title, poster_path, name) => (
  //               <ListItem
  //                 key={id}
  //                 className={'horizontal-list-item'}
  //                 id={id}
  //                 img={poster_path}
  //                 name={title || name}
  //                 categories={['person', category]}
  //               />
  //             )}
  //           </List>
  //         )}
  //       </HorizontalList>
  //     )}
  //     {castList && (
  //       <HorizontalList data={castList} title='Cast'>
  //         {(data, listRef, className) => (
  //           <List className={className} data={data} listRef={listRef}>
  //             {(id, title, poster_path, name) => (
  //               <ListItem
  //                 key={id}
  //                 className={'horizontal-list-item'}
  //                 id={id}
  //                 img={poster_path}
  //                 name={title || name}
  //                 categories={['person', category]}
  //               />
  //             )}
  //           </List>
  //         )}
  //       </HorizontalList>
  //     )}
  //     {castList && (
  //       <HorizontalList data={castList} title='Cast'>
  //         {(data, listRef, className) => (
  //           <List className={className} data={data} listRef={listRef}>
  //             {(id, title, poster_path, name) => (
  //               <ListItem
  //                 key={id}
  //                 className={'horizontal-list-item'}
  //                 id={id}
  //                 img={poster_path}
  //                 name={title || name}
  //                 categories={['person', category]}
  //               />
  //             )}
  //           </List>
  //         )}
  //       </HorizontalList>
  //     )}
  //     {castList && (
  //       <HorizontalList data={castList} title='Cast'>
  //         {(data, listRef, className) => (
  //           <List className={className} data={data} listRef={listRef}>
  //             {(id, title, poster_path, name) => (
  //               <ListItem
  //                 key={id}
  //                 className={'horizontal-list-item'}
  //                 id={id}
  //                 img={poster_path}
  //                 name={title || name}
  //                 categories={['person', category]}
  //               />
  //             )}
  //           </List>
  //         )}
  //       </HorizontalList>
  //     )}
  //   </div>
  // );
};
