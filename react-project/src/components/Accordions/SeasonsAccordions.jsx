import { useContext } from 'react';
import { AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CustomImg } from '../CustomImg/CustomImg';
import { RouteContext } from '../../Context/Context';
import { DataContext } from '../../Context/Context';
import { CustomAccordion } from './CustomAccordion';
import { transformDate } from '../Descriptions/src/description-src';

export const SeasonsAccordions = ({ list }) => {
  const CustomAccordionSummary = () => {
    const { name, episode_count, air_date } = useContext(DataContext);
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
    const { poster_path } = useContext(DataContext);
    return (
      <AccordionDetails sx={{ display: 'relative' }}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ minWidth: 200, height: 300, margin: 3 }}>
            <CustomImg src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
          </Box>
          <Overview />
        </Box>
        <CustomButton />
      </AccordionDetails>
    );
  };

  const CustomButton = () => {
    const { name, id } = useContext(RouteContext);
    const { season_number } = useContext(DataContext);
    return (
      <Button
        sx={{ position: 'absolute', right: 10, bottom: 15 }}
        size='large'
        variant='outlined'
        href={`/season/${name}/${id}/${season_number}`}
      >
        More...
      </Button>
    );
  };

  const Overview = () => {
    const { overview } = useContext(DataContext);
    return (
      <Paper
        sx={{
          padding: 3,
          height: '100%',
          maxHeight: '280px',
          overflow: 'hidden',
        }}
      >
        <Typography>{overview}</Typography>
      </Paper>
    );
  };

  return (
    <div>
      {list.map((item, i) =>
        item.name !== 'Specials' ? (
          <DataContext.Provider key={item.id} value={item}>
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
