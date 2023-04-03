import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

import { MediaTypeForLinkContext } from '../../Context/Context';
import { CustomImg } from '../CustomImg/CustomImg';
import { API_KEY } from '../../data';
import { responsive } from './responsive';
import { useFetchData } from '../../HOOKs/useFetchData';
import { ComponentWrapper } from '../Wrappers/ComponentWrapper';
import { BasicTitle } from '../common/BasicTitle';
import 'react-multi-carousel/lib/styles.css';

const InfoTypography = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  width: '100%',
  height: '10%',
  opacity: 0,
  zIndex: 555,
  transition: 'all .2s',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontWeight: 600,
  padding: '2% 3%',
  borderRadius: '5%  / 5% ',
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.3rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.7rem',
  },
}));

const ItemSx = styled(Box)({
  position: 'relative',
  margin: '0 3%',
  borderRadius: '2%',
  transition: 'all .2s',

  '&:hover': {
    boxShadow: 8,
    '& *': {
      opacity: 1,
    },
  },
});

const CharacterTypography = styled(InfoTypography)({
  top: 0,
});

const NameTypography = styled(InfoTypography)({
  bottom: 0,
});

const Item = ({ data }) => {
  const routeMeduatype = useContext(MediaTypeForLinkContext);
  const { title, name, id, poster_path, profile_path, character } = data;
  return (
    <ItemSx>
      <Link to={`/${routeMeduatype}/${name || title}/${id}`}>
        <CustomImg
          src={`https://image.tmdb.org/t/p/w200${poster_path || profile_path}`}
          alt={name || title}
        />
      </Link>
      <NameTypography sx={{ color: 'white' }}>{name || title}</NameTypography>
      {character && (
        <CharacterTypography sx={{ color: 'white' }}>
          {character}
        </CharacterTypography>
      )}
    </ItemSx>
  );
};

const MemoItem = React.memo(Item, () => true);

export const HorizontalList = React.memo(
  (props) => {
    const { id, mediaType, category, title, seasonNum } = props;
    const season = seasonNum ? `season/${seasonNum}/` : '';
    const url = `https://api.themoviedb.org/3/${mediaType}/${id}/${season}${category}?api_key=${API_KEY}&language=en-US`;

    const [data, isLoading] = useFetchData(url, null);

    if (!isLoading) return <h1>loading....</h1>;

    const list = data.results ? data.results : data.cast;

    if (!list.length) return;

    return (
      <ComponentWrapper>
        <BasicTitle>{title}</BasicTitle>
        <Carousel
          swipeable={true}
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
          {list.map((item, idx) => {
            if (item.poster_path || item.profile_path)
              return <MemoItem key={item.id} idx={idx} data={item} />;
          })}
        </Carousel>
      </ComponentWrapper>
    );
  },
  () => true
);
