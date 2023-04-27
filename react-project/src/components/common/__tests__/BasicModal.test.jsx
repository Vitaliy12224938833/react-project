import React from 'react';
import { render } from '@testing-library/react';
import { BasicModal } from '../BasicModal';

describe('BasicModal', () => {
  test('renders without errors', () => {
    render(<BasicModal />);
  });

  test('does not show modal when open prop is false', () => {
    const { queryByTestId } = render(<BasicModal open={false} />);
    expect(queryByTestId('basic-modal')).toBeNull();
  });

  test('shows modal when open prop is true', () => {
    const { getByTestId } = render(<BasicModal open={true} />);
    expect(getByTestId('basic-modal')).toBeInTheDocument();
  });

  test('displays the correct title', () => {
    const { getByText } = render(<BasicModal open={true} title='Test Title' />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  test('displays the correct title', () => {
    const { queryByText } = render(
      <BasicModal open={false} title='Test Title' />
    );
    expect(queryByText('Test Title')).toBeNull();
  });

  test('displays the correct subtitle', () => {
    const { getByText } = render(
      <BasicModal open={true} subTitle='Test Subtitle' />
    );
    expect(getByText('Test Subtitle')).toBeInTheDocument();
  });

  test('displays the correct subtitle', () => {
    const { queryByText } = render(
      <BasicModal open={false} subTitle='Test Subtitle' />
    );
    expect(queryByText('Test Subtitle')).toBeNull();
  });

  test('displays the correct content', () => {
    const { getByText } = render(
      <BasicModal open={true} content={<div>Test Content</div>} />
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  test('displays the correct content', () => {
    const { queryByText } = render(
      <BasicModal open={false} content={<div>Test Content</div>} />
    );
    expect(queryByText('Test Content')).toBeNull();
  });

  test('displays the correct buttons', () => {
    const { getByRole } = render(
      <BasicModal
        open={true}
        onSubmit={() => {}}
        onClose={() => {}}
        isUserExist={false}
      />
    );
    expect(getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  test('displays the correct buttons', () => {
    const { queryByRole } = render(
      <BasicModal
        open={false}
        onSubmit={() => {}}
        onClose={() => {}}
        isUserExist={false}
      />
    );
    expect(queryByRole('button', { name: 'Submit' })).toBeNull();
    expect(queryByRole('button', { name: 'Cancel' })).toBeNull();
  });

  test('displays message when isUserExist prop is true', () => {
    const { getByText } = render(<BasicModal open={true} isUserExist={true} />);
    expect(getByText('User with this email exist')).toBeInTheDocument();
  });

  test('displays message when isUserExist prop is true', () => {
    const { queryByText } = render(
      <BasicModal open={false} isUserExist={true} />
    );
    expect(queryByText('User with this email exist')).toBeNull();
  });

  test('displays message when isUserExist prop is true', () => {
    const { queryByText } = render(
      <BasicModal open={false} isUserExist={false} />
    );
    expect(queryByText('User with this email exist')).toBeNull();
  });

  test('displays message when isUserExist prop is true', () => {
    const { queryByText } = render(
      <BasicModal open={true} isUserExist={false} />
    );
    expect(queryByText('User with this email exist')).toBeNull();
  });
});
