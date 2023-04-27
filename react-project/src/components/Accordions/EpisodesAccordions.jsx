import React, { useContext } from 'react';
import { Box } from '@mui/system';
import {
  AccordionDetails,
  AccordionSummary,
  Rating,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { DataContext } from '../../Context/Context';
import { CustomAccordion } from './components/CustomAccordion';
import { CustomImg } from '../common/CustomImg';
import { Overview } from './components/Overview';
import { transformDate } from '../../utils/transformDate.mjs';
import { SymmeryTitel } from './components/SymmeryTitel';
import { ReleaseDate } from './components/ReleaseDate';
import { StillImageWrapper } from './components/StillImageWrapper';
import { DetailsWrapper } from './components/DetailsWrapper';

const ReleaseAndRating = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: theme.spacing(1),
    fontSize: '10px',
  },
}));

const SubTitleWraper = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
}));

const Summary = ({ idx }) => {
  const { name, air_date, vote_average } = useContext(DataContext);
  const episodeNumber = idx + 1;

  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel${episodeNumber}-content`}
      id={`panel${episodeNumber}-header`}
      sx={{ width: '100%' }}
    >
      <SymmeryTitel>{`${episodeNumber}. ${name}`}</SymmeryTitel>
      <SubTitleWraper>
        <ReleaseAndRating>
          {air_date && <ReleaseDate>{transformDate(air_date)}</ReleaseDate>}
          {vote_average && (
            <Rating
              size='small'
              name='half-rating-read'
              value={vote_average / 2}
              precision={0.5}
              readOnly
              sx={{ fontSize: { xs: '0.5rem', sm: 'inherit' } }}
            />
          )}
        </ReleaseAndRating>
      </SubTitleWraper>
    </AccordionSummary>
  );
};

const Details = () => {
  const { still_path } = useContext(DataContext);

  return (
    <AccordionDetails>
      <DetailsWrapper>
        <StillImageWrapper>
          {still_path && (
            <CustomImg
              src={`https://image.tmdb.org/t/p/original${still_path}`}
              radiusX='5%'
              radiusY='3%'
            />
          )}
        </StillImageWrapper>
        <Overview />
      </DetailsWrapper>
    </AccordionDetails>
  );
};

export const EpisodesAccordions = React.memo(({ list }) => {
  return (
    <div>
      {list.map((item, idx) => (
        <DataContext.Provider key={item.id} value={item}>
          <CustomAccordion
            summary={<Summary idx={idx} />}
            details={<Details />}
          />
        </DataContext.Provider>
      ))}
    </div>
  );
});
