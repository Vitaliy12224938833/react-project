import React from 'react';
import { Modal, Button, Typography, Box, styled, Paper } from '@mui/material';

export const Wrapper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  WebkitBoxShadow: '0px 0px 46px 1px rgba(0,0,0,0.75)',
  MozBoxShadow: '0px 0px 46px 1px rgba(0,0,0,0.75)',
  boxShadow: '0px 0px 46px 1px rgba(0,0,0,0.75)',
  [theme.breakpoints.up('xs')]: {
    width: 270,
    padding: 15,
  },
  [theme.breakpoints.up('sm')]: {
    width: 350,
    padding: 20,
  },
  [theme.breakpoints.up('md')]: {
    width: 500,
    padding: 30,
  },
}));

const Buttons = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
});

const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.7rem',
  },
}));

const Sybtitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
}));
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
      <Wrapper>
        <Title>{title}</Title>
        <Sybtitle>{subTitle}</Sybtitle>
        {content}
        <Buttons>
          <StyledButton variant='contained' onClick={onSubmit}>
            Submit
          </StyledButton>
          <StyledButton onClick={onClose}>Cancel</StyledButton>
        </Buttons>
      </Wrapper>
    </Modal>
  );
};
