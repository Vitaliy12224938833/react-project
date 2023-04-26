import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { CustomAccordion } from '../CustomAccordion';


describe('CustomAccordion', () => {
  const summaryText = 'Summary';
  const detailsText = 'Details';

  test('renders summary and details correctly', () => {
    const { getByText } = render(
      <CustomAccordion
        summary={<div>{summaryText}</div>}
        details={<div>{detailsText}</div>}
      />
    );

    const summaryElement = getByText(summaryText);
    const detailsElement = getByText(detailsText);
    expect(summaryElement).toBeInTheDocument();
    expect(detailsElement).not.toBeVisible();
  });

  test('expands and collapses accordion on click', async () => {
    const { getByText } = render(
      <CustomAccordion
        summary={<div>{summaryText}</div>}
        details={<div>{detailsText}</div>}
      />
    );
    const summaryElement = getByText(summaryText);
    const detailsElement = getByText(detailsText);
    expect(detailsElement).not.toBeVisible();
    fireEvent.click(summaryElement);
    await waitFor(() => expect(detailsElement).toBeVisible());
    fireEvent.click(summaryElement);
    await waitFor(() => expect(detailsElement).not.toBeVisible());
  });
});
