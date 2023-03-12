import { useState } from 'react';
import { Accordion } from '@mui/material';

export const CustomAccordion = ({ summary, details, idx }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    !(idx === 0) && (
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        {summary}
        {details}
      </Accordion>
    )
  );
};
