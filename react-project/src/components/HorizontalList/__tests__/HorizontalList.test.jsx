// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import HorizontalList from '../HorizontalList';

// // Mock the useFetchData hook
// jest.mock('../../../HOOKs/useFetchData', () => ({
//   useFetchData: jest.fn(() => [[{ id: 1, title: 'Test Item' }], false]),
// }));

// describe('HorizontalList', () => {
//   test('should render loading message', () => {
//     // Mock isLoading state to be true
//     jest.mock('../../HOOKs/useFetchData', () => ({
//       useFetchData: jest.fn(() => [[{ id: 1, title: 'Test Item' }], true]),
//     }));

//     render(<HorizontalList />);

//     expect(screen.getByText('loading....')).toBeInTheDocument();
//   });

//   test('should render items', () => {
//     render(<HorizontalList />);

//     expect(screen.getByText('Test Item')).toBeInTheDocument();
//   });

//   test('should render title', () => {
//     render(<HorizontalList title='Test Title' />);

//     expect(screen.getByText('Test Title')).toBeInTheDocument();
//   });
// });
