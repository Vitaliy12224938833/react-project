import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { SeasonsAccordions } from '../SeasonsAccordions';
import { fireEvent } from '@testing-library/react';
describe('SeasonsAccordions', () => {
  const mockHistoryPush = jest.fn();
  const list = [
    {
      id: 1,
      name: 'Season 1',
      air_date: '2008-01-20',
      episode_count: 7,
      season_number: 1,
      overview: 'some overview 1',
    },
    {
      id: 2,
      name: 'Season 2',
      air_date: '2009-03-08',
      episode_count: 13,
      season_number: 2,
      overview: 'some overview 2',
    },
  ];

  test('renders without errors with empty list', () => {
    render(
      <Router>
        <SeasonsAccordions list={[]} />
      </Router>
    );
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  test('renders correct number of seasons and accordions', () => {
    render(
      <Router>
        <SeasonsAccordions list={list} />
      </Router>
    );
    expect(screen.queryAllByRole('button')).toHaveLength(list.length * 2);
    // expect(screen.queryAllByRole('tabpanel')).toHaveLength(list.length);
  });

  //   test('clicking on "More..." button navigates to the correct URL', async () => {
  //     const { container } = render(
  //       <Router history={{ push: mockHistoryPush }}>
  //         <SeasonsAccordions list={list} />
  //       </Router>
  //     );
  //     const moreButton = container.querySelector('button[type="button"]');
  //     await userEvent.click(moreButton);
  //     expect(mockHistoryPush).toHaveBeenCalledWith('tv/id/Season 2/season/2');
  //   });

  //   test('clicking on accordion expands its content', async () => {
  //     const { getAllByTestId } = render(
  //       <Router history={{ push: mockHistoryPush }}>
  //         <SeasonsAccordions list={list} />
  //       </Router>
  //     );
  //     const summaryElements = getAllByTestId('accordion-summary');
  //     const detailsElements = getAllByTestId('accordion-details');
  //     console.log({ summaryElements });
  //     console.log({ detailsElements });
  //     summaryElements.forEach(async (summary, idx) => {
  //       expect(detailsElements[idx]).not.toBeVisible();
  //       fireEvent.click(summary);
  //       await waitFor(() => expect(detailsElements[idx]).toBeVisible());
  //       fireEvent.click(summary);
  //       await waitFor(() => expect(detailsElements[idx]).not.toBeVisible());
  //     });
  //   });
});
