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

  const captionSx = (locatino, value) => ({
    position: 'absolute',
    [locatino]: value,
    textAlign: 'center',
    backgroundColor: 'white',
    width: '100%',
    border: 'solid 2px #f27405',
    color: 'black',
    opacity: 0,
  });

  const boxSx = {
    margin: 1,
    position: 'relative',
    '&:hover': {
      '& .css-f2pgy-MuiTypography-root, .css-1409lhc-MuiTypography-root': {
        opacity: 1,
        transition: 'all 0.2s',
      },
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
    const { title, name, id, poster_path, profile_path, character } = data;
    return (
      <Box sx={boxSx}>
        <Link to={`/${linkMediaType}/${name || title}/${id}`}>
          <Typography sx={captionSx('top', '-0.5%')} variant='caption'>
            {character}
          </Typography>
          <Typography sx={captionSx('bottom', '1%')} variant='caption'>
            {name}
          </Typography>
          <CustomImg
            src={`https://image.tmdb.org/t/p/w200${
              poster_path || profile_path
            }`}
            alt={name || title}
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
