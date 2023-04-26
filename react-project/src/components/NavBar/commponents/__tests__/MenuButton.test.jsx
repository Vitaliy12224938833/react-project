import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuButton } from '../MenuButton';

describe('MenuButton', () => {
  test('should render children', () => {
    const { getByText } = render(<MenuButton>Button Text</MenuButton>);
    expect(getByText('Button Text')).toBeInTheDocument();
  });

  test('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <MenuButton onClick={onClick}>Button Text</MenuButton>
    );
    fireEvent.click(getByTestId('menu-buttons'));
    expect(onClick).toHaveBeenCalled();
  });
});
