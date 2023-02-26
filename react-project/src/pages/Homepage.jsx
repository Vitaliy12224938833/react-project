import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Slide } from '../components/Sliders/Slide';
import { Slider } from '../components/Sliders/Slider';

const API_KEY = '1f63914a91cb95d33f7d8d413f4c28ca';

export const Homepage = ({}) => {
  const [popularList, setPupularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [topList, setTop] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => setPupularList(res.data.results.slice(0, 6)));
  }, []);
  // console.log(popularList);
  return (
    <div className='conteiner'>
      <Slider data={popularList}>
        {(data, className) => (
          <Slide
            className={className}
            data={data}
            category='now_playing'
            content='movie'
          />
        )}
      </Slider>
    </div>
  );
};
