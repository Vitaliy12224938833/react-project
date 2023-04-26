import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { NavBarMenu } from '../NavBarMenu';

describe('NavBarMenu component', () => {
  test('renders the children passed as prop', () => {
    const { getByText } = render(
      <NavBarMenu menu={document.body} closeMenu={() => {}} style={{}}>
        <p>Hello World</p>
      </NavBarMenu>
    );
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  test('calls closeMenu function when the menu is closed', () => {
    const closeMenuMock = jest.fn();
    const { getByRole } = render(
      <NavBarMenu menu={document.body} closeMenu={closeMenuMock} style={{}}>
        <p>Hello World</p>
      </NavBarMenu>
    );
    const menu = getByRole('menu');
    fireEvent.keyDown(menu, { key: 'Escape' });
    expect(closeMenuMock).toHaveBeenCalledTimes(1);
  });
});
