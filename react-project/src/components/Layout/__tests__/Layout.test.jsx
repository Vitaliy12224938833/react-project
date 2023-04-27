import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from '../Layout';
import { UserDataContext } from '../../../Context/Context';

describe('Layout component', () => {
  test('should render NavBar component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(getByTestId('navbar')).toBeInTheDocument();
  });

  test('should render Outlet component', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <Layout />
      </MemoryRouter>
    );
    expect(getByRole('main')).toBeInTheDocument();
  });

  //   test('should pass userId to UserDataContext', () => {
  //     const userId = 'abc123';
  //     const { getByTestId } = render(
  //       <MemoryRouter>
  //         <Layout />
  //       </MemoryRouter>,
  //       {
  //         wrapper: ({ children }) => (
  //           <UserDataContext.Provider value={userId}>
  //             <div data-testId='user-data-context'></div>
  //           </UserDataContext.Provider>
  //         ),
  //       }
  //     );
  //     expect(getByTestId('user-data-context').textContent).toBe(userId);
  //   });
});
