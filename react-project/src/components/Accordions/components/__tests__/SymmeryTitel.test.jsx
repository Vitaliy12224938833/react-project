import React from 'react';
import { render } from '@testing-library/react';
import { SymmeryTitel } from '../SymmeryTitel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

describe('SymmeryTitel', () => {
  const theme = createTheme();

  test('renders with default styles', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <SymmeryTitel>Test Title</SymmeryTitel>
      </ThemeProvider>
    );

    expect(getByText('Test Title')).toHaveStyle({
      width: '33%',
      flexShrink: 0,
      fontSize: '1rem',
    });
  });

  //   test('renders with responsive styles for small screens', () => {
  //     const { getByText } = render(
  //       <ThemeProvider theme={theme}>
  //         <SymmeryTitel>Test Title</SymmeryTitel>
  //       </ThemeProvider>
  //     );

  //     expect(getByText('Test Title')).toHaveStyleRule('width', '60%', {
  //       media: theme.breakpoints.down('sm'),
  //     });
  //     expect(getByText('Test Title')).toHaveStyleRule(
  //       'margin-bottom',
  //       theme.spacing(0.5) + 'px',
  //       {
  //         media: theme.breakpoints.down('sm'),
  //       }
  //     );
  //     expect(getByText('Test Title')).toHaveStyleRule('font-size', '0.6rem', {
  //       media: theme.breakpoints.down('sm'),
  //     });
  //   });
});
