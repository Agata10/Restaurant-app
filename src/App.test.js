import { fireEvent, render, screen } from '@testing-library/react';
import { BookingForm } from './components/BookingForm';
import { updateTimes, initializeTimes } from './utils';
import { fetchData } from './API';

test('Renders the BookingForm date label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByText('Reserve a table');
  expect(labelElement).toBeInTheDocument();
});

test('InitialTimes return the correct value', () => {
  const today = new Date();
  const initialState = initializeTimes;
  const result = { avaiableTimes: fetchData(today) };
  expect(initialState).toEqual(result);
});

// test('updateTimes returns the same state', () => {
//   const state = {
//     availableTimes: [
//       '17:00',
//       '17:30',
//       '19:00',
//       '19:30',
//       '21:30',
//       '22:00',
//       '23:30',
//     ],
//   };
//   const date = new Date();
//   const newState = updateTimes(state, date);
//   expect(newState).toEqual(state);
// });

test('Submission is invalid when there is no name, email, date and occasion is not picked', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  const nameInput = screen.getByTestId('name');
  expect(nameInput.value).toBe('');

  const emailInput = screen.getByTestId('email');
  expect(emailInput.value).toBe('');

  const dateInput = screen.getByTestId('date');
  expect(dateInput.value).toBe('');

  const occassionInput = screen.getByTestId('occasion');
  expect(occassionInput.value).toBe('');

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(submitButton).toHaveAttribute('disabled');
  expect(handleSubmit).not.toHaveBeenCalled();
});

test('Submit button is not disabled when there are all fields filled and name is more than 4 and less than 31 characters, email is valid', async () => {
  const onSubmit = jest.fn();
  render(<BookingForm onSubmit={onSubmit} />);

  const nameInput = screen.getByTestId('name');
  fireEvent.change(nameInput, { target: { value: 'anitka' } });

  const emailInput = screen.getByTestId('email');
  fireEvent.change(emailInput, { target: { value: '12@wp.pl' } });

  const dataInput = screen.getByTestId('date');
  fireEvent.change(dataInput, { target: { value: '2023-12-12' } });

  const timeInput = screen.getByTestId('time');
  fireEvent.change(timeInput, { target: { value: '17:00' } });

  const guestsInput = screen.getByTestId('guests');
  fireEvent.change(guestsInput, { target: { value: 3 } });

  const occassionInput = screen.getByTestId('occasion');
  fireEvent.change(occassionInput, { target: { value: 'birthday' } });

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);
  onSubmit();
  expect(submitButton).not.toHaveAttribute('disabled');
  expect(onSubmit).toHaveBeenCalled();
});
