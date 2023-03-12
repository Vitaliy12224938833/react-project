import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomImg } from '../CustomImg/CustomImg';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

export const EpisodesAccordions = ({ list }) => {
  const ReleaseAndRating = ({ item }) => {
    return (
      (!!item.vote_average || item.air_date) && (
        <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
          <Typography
            sx={{
              color: 'text.secondary',
              marginRight: 1,
              alignItems: 'center',
            }}
            variant='caption'
          >
            {item.air_date.split('-').reverse().join(' ')}
          </Typography>
          <Rating
            size='small'
            name='half-rating-read'
            value={item.vote_average / 2}
            precision={0.5}
            readOnly
          />
        </Box>
      )
    );
  };

  return (
    <div>
      {list.map((item, i) => {
        const [expanded, setExpanded] = useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
        };
        return (
          <Accordion
            key={item.id}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {item.name}
              </Typography>
              <ReleaseAndRating item={item} />
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ minWidth: 200, height: 300, margin: 3 }}>
                  <CustomImg
                    src={`https://image.tmdb.org/t/p/w400${item.still_path}`}
                  />
                </Box>
                <Paper sx={{ padding: 5 }}>
                  <Typography>{item.overview}</Typography>
                </Paper>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
