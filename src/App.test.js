import { fireEvent, render, screen } from '@testing-library/react';
import { BookingForm } from './components/BookingForm';
import { Main } from './components/Main';

test('Renders the BookingForm date label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByLabelText('Choose date');
  expect(labelElement).toBeInTheDocument();
});

test('Submission is disabled when array of times is empty', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute('disabled');
});
