import React from 'react';
import { render } from '@testing-library/react';
import { DescriptionOverview } from '../DescriptionOverview';

describe('DescriptionOverview', () => {
  const overview = 'This is a test overview.';

  test('renders without crashing', () => {
    render(<DescriptionOverview overview={overview} />);
  });

  test('renders the StyledPaper component with the correct variant prop', () => {
    const { getByTestId } = render(<DescriptionOverview overview={overview} />);
    expect(getByTestId('description-overview-paper')).toHaveClass(
      'MuiPaper-elevation'
    );
  });

  test('renders the StyledText component with the correct children prop', () => {
    const { getByText } = render(<DescriptionOverview overview={overview} />);
    expect(getByText(overview)).toBeInTheDocument();
  });
});
