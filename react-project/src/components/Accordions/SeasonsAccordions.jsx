import { useResolvedPath, Link } from 'react-router-dom';
import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Button,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomImg } from '../CustomImg/CustomImg';
import { DataContext } from '../../Context/Context';
import { CustomAccordion } from './components/CustomAccordion';
import { Overview } from './components/Overview';
import { SymmeryTitel } from './components/SymmeryTitel';
import { ReleaseDate } from './components/ReleaseDate';
import { StillImageWrapper } from './components/StillImageWrapper';
import { DetailsWrapper } from './components/DetailsWrapper';
import { updateSeasonUrl } from '../../utils/updateSeasonUrl';
import { transformDate } from '../../utils/transformDate.mjs';

const NumeOfEpisodes = styled(Typography)(({ theme }) => ({
  color: 'text.secondary',
  marginLeft: 5,
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.6rem',
  },
}));

export const SeasonsAccordions = ({ list }) => {
  const SeasonAccordionSummary = ({ name, episode_count, air_date }) => {
    return (
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1bh-content'
        id='panel1bh-header'
        sx={{ width: '100%' }}
      >
        <SymmeryTitel>{name}</SymmeryTitel>
        <Box sx={{ marginLeft: 'auto' }}>
          <ReleaseDate>{`${transformDate(air_date)}`}</ReleaseDate>
          <NumeOfEpisodes>{`Episodes: ${episode_count}`}</NumeOfEpisodes>
        </Box>
      </AccordionSummary>
    );
  };

  const ButtonWraper = styled(Box)(({ theme }) => ({
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  }));
  const StyledButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }));

  const SeasonAccordionDetails = ({ poster_path, season_number }) => {
    const { pathname } = useResolvedPath();
    const moreUrl = updateSeasonUrl(pathname, 'season', season_number);
    return (
      <AccordionDetails>
        <DetailsWrapper sx={{ display: 'flex' }}>
          <StillImageWrapper>
            <CustomImg src={`https://image.tmdb.org/t/p/w400${poster_path}`} />
          </StillImageWrapper>
          <Overview />
        </DetailsWrapper>
        <ButtonWraper>
          <StyledButton variant='outlined' component={Link} to={moreUrl}>
            More...
          </StyledButton>
        </ButtonWraper>
      </AccordionDetails>
    );
  };

  const filteredList = list.filter((item) => item.name !== 'Specials');
  return (
    <div>
      {filteredList.map((item, i) => (
        <DataContext.Provider key={item.id} value={item}>
          <CustomAccordion
            summary={<SeasonAccordionSummary {...item} />}
            details={<SeasonAccordionDetails {...item} />}
            idx={i}
          />
        </DataContext.Provider>
      ))}
    </div>
  );
};
