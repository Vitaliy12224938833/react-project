import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { StillImageWrapper } from '../StillImageWrapper';
import { createTheme } from '@mui/material/styles';

describe('StillImageWrapper', () => {
  const theme = createTheme();
  test('renders with default styles', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <StillImageWrapper>
          <img src='https://example.com/image.jpg' alt='Example Image' />
        </StillImageWrapper>
      </ThemeProvider>
    );

    const stillImageWrapper = container.firstChild;
    expect(stillImageWrapper).toHaveStyle({
      minWidth: '200px',
      margin: theme.spacing(3),
      maxHeight: '300px',
    });
  });

  //   test('renders with responsive styles for small screens', () => {
  //     const { container } = render(
  //       <ThemeProvider theme={theme}>
  //         <StillImageWrapper>
  //           <img src='https://example.com/image.jpg' alt='Example Image' />
  //         </StillImageWrapper>
  //       </ThemeProvider>
  //     );

  //     const stillImageWrapper = container.firstChild;
  //     const imgElement = stillImageWrapper.querySelector('img');
  //     const imgSrc = imgElement.getAttribute('src');

  //     expect(stillImageWrapper).toHaveStyleRule('width', '100%', {
  //       media: theme.breakpoints.down('sm'),
  //     });
  //     expect(stillImageWrapper).toHaveStyleRule('min-width', 'unset', {
  //       media: theme.breakpoints.down('sm'),
  //     });
  //     expect(stillImageWrapper).toHaveStyleRule('max-height', 'none', {
  //       media: theme.breakpoints.down('sm'),
  //     });
  //     expect(stillImageWrapper).toHaveStyle(`
  //       margin: ${theme.spacing(1.5, 3)};
  //     `);
  //     expect(imgSrc).toEqual('https://example.com/image.jpg');
  //   });
});
