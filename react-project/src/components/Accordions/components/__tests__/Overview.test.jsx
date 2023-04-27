import React from 'react';
import { render } from '@testing-library/react';
import { Overview } from '../Overview';
import { DataContext } from '../../../../Context/Context';

describe('Overview component', () => {
  test('should not render when overview is null', () => {
    const { container } = render(
      <DataContext.Provider value={{ overview: null }}>
        <Overview />
      </DataContext.Provider>
    );
    expect(container.firstChild).toBeNull();
  });

  test('should render overview when overview is not null', () => {
    const mockOverview = 'This is an overview';
    const { getByText } = render(
      <DataContext.Provider value={{ overview: mockOverview }}>
        <Overview />
      </DataContext.Provider>
    );
    expect(getByText(mockOverview)).toBeInTheDocument();
  });
});
