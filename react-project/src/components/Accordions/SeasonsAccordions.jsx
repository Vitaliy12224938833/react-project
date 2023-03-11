import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomImg } from '../CustomImg/CustomImg';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
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
              <AccordionDetails>
                <Box sx={{ width: 200, height: 300, margin: 3 }}>
                  <Link to={`/season/${name}/${id}/${item.season_number}`}>
                    <CustomImg
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    />
                  </Link>
                </Box>
                <Paper sx={{ padding: 5 }}>
                  <Typography>{item.overview}</Typography>
                </Paper>
              </AccordionDetails>
            </Accordion>
          )
        );
      })}
    </div>
  );
};
