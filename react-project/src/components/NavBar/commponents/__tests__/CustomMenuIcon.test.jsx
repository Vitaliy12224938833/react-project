import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CustomMenuIcon } from '../CustomMenuIcon';

describe('CustomMenuIcon', () => {
  test('calls openMenu prop when clicked and state is false', () => {
    const openMenuMock = jest.fn();
    const closeMenuMock = jest.fn();
    const { getByTestId } = render(
      <CustomMenuIcon
        openMenu={openMenuMock}
        closeMenu={closeMenuMock}
        state={false}
      />
    );

    const menuButton = getByTestId('menu-buttons');
    fireEvent.click(menuButton);

    expect(openMenuMock).toHaveBeenCalled();
    expect(closeMenuMock).not.toHaveBeenCalled();
  });

  test('calls closeMenu prop when clicked and state is true', () => {
    const openMenuMock = jest.fn();
    const closeMenuMock = jest.fn();
    const { getByTestId } = render(
      <CustomMenuIcon
        openMenu={openMenuMock}
        closeMenu={closeMenuMock}
        state={true}
      />
    );

    const menuButton = getByTestId('menu-buttons');
    fireEvent.click(menuButton);

    expect(closeMenuMock).toHaveBeenCalled();
    expect(openMenuMock).not.toHaveBeenCalled();
  });
});
