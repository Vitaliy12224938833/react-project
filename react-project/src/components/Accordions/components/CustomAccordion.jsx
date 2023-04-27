import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React from 'react';

export const CustomAccordion = React.memo(({ summary, details }) => {
  if (!summary || !details) return null;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded ? true : false);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary
        inpurProps={{ 'data-testid': 'accordion-summary' }}
        data-testid='accordion-summary'
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails
        inpurProps={{ 'data-testid': 'accordion-details' }}
        data-testid='accordion-details'
      >
        {details}
      </AccordionDetails>
    </Accordion>
  );
});
