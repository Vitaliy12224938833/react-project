import { useContext } from 'react';
import { AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CustomImg } from '../CustomImg/CustomImg';
import { RouteContext } from '../../Context/Context';
import { DataContext } from '../../Context/Context';
import { CustomAccordion } from './components/CustomAccordion';
import { transformDate } from '../Descriptions/src/description-src';
import { Overview } from './components/Overview';

export const SeasonsAccordions = ({ list }) => {
  const CustomAccordionSummary = () => {
    const [{ name, episode_count, air_date }] = useContext(DataContext);
    return (
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1bh-content'
        id='panel1bh-header'
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{name}</Typography>
        <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
          <Typography variant='caption' sx={{ color: 'text.secondary' }}>
            {`${transformDate(air_date)}`}
          </Typography>
          <Typography
            variant='caption'
            sx={{ color: 'text.secondary', marginLeft: 5 }}
          >
            {`Episodes: ${episode_count}`}
          </Typography>
        </Box>
      </AccordionSummary>
    );
  };

  const CustomAccordionDetails = () => {
    const [{ poster_path }] = useContext(DataContext);
    return (
      <AccordionDetails>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ minWidth: 200, height: 300, margin: 3 }}>
            <CustomImg src={`https://image.tmdb.org/t/p/w400${poster_path}`} />
          </Box>
          <Overview />
        </Box>
        <CustomButton />
      </AccordionDetails>
    );
  };

  const CustomButton = () => {
    const { name, id } = useContext(RouteContext);
    const [{ season_number }] = useContext(DataContext);
    return (
      <Box sx={{ textAlign: 'right' }}>
        <Button
          size='large'
          variant='outlined'
          href={`/season/${name}/${id}/${season_number}`}
        >
          More...
        </Button>
      </Box>
    );
  };

  return (
    <div>
      {list.map((item, i) =>
        item.name !== 'Specials' ? (
          <DataContext.Provider key={item.id} value={[item]}>
            <CustomAccordion
              summary={<CustomAccordionSummary />}
              details={<CustomAccordionDetails />}
              idx={i}
            />
          </DataContext.Provider>
        ) : null
      )}
    </div>
  );
};
