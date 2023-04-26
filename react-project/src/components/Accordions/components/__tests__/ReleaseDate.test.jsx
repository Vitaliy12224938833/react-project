import React from 'react';
import { render } from '@testing-library/react';
import { ReleaseDate } from '../ReleaseDate';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

describe('ReleaseDate', () => {
  const theme = createTheme();

  test('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ReleaseDate>2023 04 21</ReleaseDate>
      </ThemeProvider>
    );

    const releaseDateElement = getByText('2023 04 21');
    expect(releaseDateElement).toBeInTheDocument();
  });

  test('applies styles correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ReleaseDate>2023 04 21</ReleaseDate>
      </ThemeProvider>
    );

    const releaseDateElement = getByText('2023 04 21');

    expect(releaseDateElement).toHaveStyle({
      color: theme.palette.text.secondary,
      alignItems: 'center',
      textAlign: 'right',
      margin: 0,
    });
  });
});
