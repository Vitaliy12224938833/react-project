import { AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { Typography } from '@mui/material';
import { CustomImg } from '../CustomImg/CustomImg';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import { DataContext } from '../../Context/Context';
import { useContext } from 'react';
import { CustomAccordion } from './CustomAccordion';
import { transformDate } from '../Descriptions/src/description-src';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const EpisodesAccordions = ({ list }) => {
  const CustomAccordionSummary = () => {
    const [{ name }, idx] = useContext(DataContext);
    return (
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1bh-content'
        id='panel1bh-header'
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{`${
          idx + 1
        }. ${name}`}</Typography>
        <ReleaseAndRating />
      </AccordionSummary>
    );
  };
  const CustomAccordionDetails = () => {
    const [{ still_path, overview }] = useContext(DataContext);
    return (
      <AccordionDetails>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ minWidth: 200, height: 300, margin: 3 }}>
            <CustomImg src={`https://image.tmdb.org/t/p/w400${still_path}`} />
          </Box>
          <Paper sx={{ padding: 5 }}>
            <Typography>{overview}</Typography>
          </Paper>
        </Box>
      </AccordionDetails>
    );
  };

  const ReleaseAndRating = () => {
    const [{ air_date, vote_average }] = useContext(DataContext);
    return (
      (!!vote_average || air_date) && (
        <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
          <Typography
            variant='caption'
            sx={{
              color: 'text.secondary',
              marginRight: 1,
              alignItems: 'center',
            }}
          >
            {transformDate(air_date)}
          </Typography>
          <Rating
            size='small'
            name='half-rating-read'
            value={vote_average / 2}
            precision={0.5}
            readOnly
          />
        </Box>
      )
    );
  };

  return (
    <div>
      {list.map((item, idx) => (
        <DataContext.Provider key={item.id} value={[item, idx]}>
          <CustomAccordion
            summary={<CustomAccordionSummary />}
            details={<CustomAccordionDetails />}
          />
        </DataContext.Provider>
      ))}
    </div>
  );
};
