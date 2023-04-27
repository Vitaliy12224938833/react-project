import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { GoHomeLink } from '../GoHomeLink';

describe('GoHomeLink', () => {
  test('should render a link with "Home" text', () => {
    render(
      <MemoryRouter>
        <GoHomeLink />
      </MemoryRouter>
    );
    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument();
  });

  test('should navigate to "/home" when clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <GoHomeLink />
      </MemoryRouter>
    );
    const linkElement = container.querySelector('a');
    expect(linkElement).toHaveAttribute('href', '/home');
  });
});
