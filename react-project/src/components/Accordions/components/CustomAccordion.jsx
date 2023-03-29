import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import PropTypes from 'prop-types';

export const CustomAccordion = ({ summary, details }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded ? true : false);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary>{summary}</AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};

CustomAccordion.propTypes = {
  summary: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired,
};
