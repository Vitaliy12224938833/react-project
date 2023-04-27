import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../NavBar';

describe('NavBar', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });

  test('renders correct number of menu items for each page', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const menuItems = getAllByRole('button');

    expect(menuItems.length).toBe(6);
  });

  test('opens and closes menu when clicked on mobile', () => {
    const { getByTestId, getByRole } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    // Open menu
    const menuIcon = getByTestId('MenuIcon');
    fireEvent.click(menuIcon);

    const menu = getByRole('menu');
    expect(menu).toHaveClass('MuiList-root');

    // Close menu
    fireEvent.click(menuIcon);
    setTimeout(() => {
      expect(menu).not.toHaveClass('MuiList-root');
    }, 500);
  });

  test('opens and closes menu when clicked on desktop', () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const menuButtons = getAllByTestId('menu-buttons');
    const menus = getAllByTestId('nav-bar-menu');
    for (let i = 0; i < menuButtons.length; i++) {
      const button = menuButtons[i];
      const menu = menus[i];

      expect(menu).toHaveClass('MuiModal-hidden');

      // Open menu

      fireEvent.click(button);

      setTimeout(() => {
        expect(menu).not.toHaveClass('MuiModal-hidden');
      }, 500);

      // // Close menu

      fireEvent.click(button);

      setTimeout(() => {
        expect(menu).toHaveClass('MuiModal-hidden');
      }, 500);
    }
  });
});
