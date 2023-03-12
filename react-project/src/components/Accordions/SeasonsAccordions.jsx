import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomImg } from '../CustomImg/CustomImg';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';

export const SeasonsAccordions = ({ list, id, name }) => {
  return (
    <div>
      {list.map((item, i) => {
        const [expanded, setExpanded] = useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
        };
        return (
          !(i === 0) && (
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
                <Typography sx={{ color: 'text.secondary' }}>
                  {`Relize: ${item.air_date.split('-').reverse().join(' ')}`}
                </Typography>
                <Typography sx={{ color: 'text.secondary', margin: '0 50px' }}>
                  {`Number of episodes: ${item.episode_count}`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ display: 'relative' }}>
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ minWidth: 200, height: 300, margin: 3 }}>
                    <CustomImg
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    />
                  </Box>
                  <Paper
                    sx={{
                      padding: 3,
                      height: '100%',
                      maxHeight: '280px',
                      overflow: 'hidden',
                    }}
                  >
                    <Typography>{item.overview}</Typography>
                  </Paper>
                </Box>{' '}
                <Button
                  sx={{ position: 'absolute', right: 10, bottom: 15 }}
                  size='large'
                  variant='outlined'
                  href={`/season/${name}/${id}/${item.season_number}`}
                >
                  More...
                </Button>
              </AccordionDetails>
            </Accordion>
          )
        );
      })}
    </div>
  );
};
