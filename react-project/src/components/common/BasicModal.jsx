import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Modal } from '@mui/material';
import { Button } from '@mui/material';

export const modalStyles = {
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  },
  inputFields: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '15px',
    '.MuiInput-root': {
      marginBottom: '20px',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'end',
  },
};

export const BasicModal = ({
  open,
  onClose,
  title,
  subTitle,
  content,
  onSubmit,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Typography variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{subTitle}</Typography>
        {content}
        <Box sx={modalStyles.buttons}>
          <Button variant='contained' onClick={onSubmit}>
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  );
};
