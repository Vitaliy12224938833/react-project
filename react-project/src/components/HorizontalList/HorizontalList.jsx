import { useContext } from 'react';
import { API_KEY } from '../../data';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MediaTypeForLinkContext } from '../../Context/Context';
import { CustomImg } from '../CustomImg/CustomImg';
import { Box } from '@mui/system';
import { useFetchData } from '../../HOOKs/useFetchData';
import { responsive } from './responsive';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const HorizontalList = ({
  id,
  mediaType,
  category,
  title,
  seasonNum,
}) => {
  const routeMeduatype = useContext(MediaTypeForLinkContext);

  const season = seasonNum ? `season/${seasonNum}/` : '';
  const url = `https://api.themoviedb.org/3/${mediaType}/${id}/${season}${category}?api_key=${API_KEY}&language=en-US`;
  const [data, isLoading] = useFetchData(url, null);

  if (!isLoading) return <h1>loading....</h1>;

  const list = data.results ? data.results : data.cast;

  if (!list.length) return;

  const captionSx = (locatino) => ({
    position: 'absolute',
    [locatino]: 0,
    textAlign: 'center',
    backgroundColor: 'white',
    width: '100%',
    border: 'solid 2px #f27405',
    color: 'black',
    opacity: 0,
  });

  const itemSx = {
    margin: 1,
    position: 'relative',
    maxWidth: '200px',
    height: '300px',
    borderRadius: '2%',
    transition: 'all .2s',
    '&:hover': {
      boxShadow: 8,
      '& .css-161k366-MuiTypography-root, .css-1jxoego-MuiTypography-root': {
        opacity: 1,
        transition: 'all 0.2s',
      },
    },
  };

  const Item = ({ data }) => {
    const { title, name, id, poster_path, profile_path, character } = data;
    return (
      <Box sx={itemSx}>
        <Link to={`/${routeMeduatype}/${name || title}/${id}`}>
          {!!character && (
            <Typography sx={captionSx('top')} variant='caption'>
              {character}
            </Typography>
          )}
          {!!profile_path && (
            <Typography sx={captionSx('bottom')} variant='caption'>
              {name}
            </Typography>
          )}
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
        {list.map((item) => {
          if (item.poster_path || item.profile_path)
            return <Item key={item.id} data={item} />;
        })}
      </Carousel>
    </Box>
  );
};
