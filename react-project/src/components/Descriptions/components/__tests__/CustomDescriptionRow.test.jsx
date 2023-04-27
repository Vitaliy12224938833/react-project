import React from 'react';
import { render } from '@testing-library/react';
import { CustomDescriptionRow } from '../CustomDescriptinoRow';

describe('CustomDescriptionRow component', () => {
  test('renders the caption and description', () => {
    const caption = 'Test Caption';
    const description = 'Test Description';

    const { getByText } = render(
      <table>
        <tbody>
          <CustomDescriptionRow caption={caption} description={description} />
        </tbody>
      </table>
    );

    expect(getByText(caption)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  test('renders the caption with a bold font weight', () => {
    const caption = 'Test Caption';
    const description = 'Test Description';

    const { getByText } = render(
      <table>
        <tbody>
          <CustomDescriptionRow caption={caption} description={description} />
        </tbody>
      </table>
    );

    const captionElement = getByText(caption);
    expect(captionElement).toHaveStyle('font-weight: 700');
  });

  test('renders the caption with a font size of 25px and the description with a font size of 1rem', () => {
    const caption = 'Test Caption';
    const description = 'Test Description';

    const { getByText } = render(
      <table>
        <tbody>
          <CustomDescriptionRow caption={caption} description={description} />
        </tbody>
      </table>
    );

    const captionElement = getByText(caption);
    const descriptionElement = getByText(description);

    expect(captionElement).toHaveStyle('font-size: 25px');
    expect(descriptionElement).toHaveStyle('font-size: 25px');
  });
});
