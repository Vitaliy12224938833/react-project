import { useEffect, useState, useContext } from 'react';
import { API_KEY } from '../../data';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MediaTypeForLinkContext } from '../../Context/Context';
import { CustomImg } from '../CustomImg/CustomImg';
import { Box } from '@mui/system';
import Carousel from 'react-multi-carousel';
import axios from 'axios';

import 'react-multi-carousel/lib/styles.css';

export const HorizontalList = ({ id, mediaType, category, title }) => {
  const linkMediaType = useContext(MediaTypeForLinkContext);
  const [listData, setListData] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/${category}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setListData(res.data.cast || res.data.results));
  }, [id]);

  const Item = ({ data }) => {
    return (
      <Box sx={{ margin: 1 }}>
        <Link to={`/${linkMediaType}/${data.name || data.title}/${data.id}`}>
          <CustomImg
            src={`https://image.tmdb.org/t/p/w200${
              data.poster_path || data.profile_path
            }`}
            alt={data.name || data.title}
          ></CustomImg>
        </Link>
      </Box>
    );
  };

  return (
    listData.length !== 0 && (
      <Box sx={{ marginTop: 10, marginBottom: 10 }}>
        <Typography variant='h4'>{title}</Typography>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition='all .5s'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          itemClass='carousel-item-padding-40-px'
        >
          {listData.map((item) => {
            if (item.poster_path || item.profile_path)
              return <Item key={item.id} data={item} />;
          })}
        </Carousel>
      </Box>
    )
  );
};
