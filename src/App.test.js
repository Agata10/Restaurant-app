import { fireEvent, render, screen } from '@testing-library/react';
import { BookingForm } from './components/BookingForm';
import { updateTimes, initializeTimes } from './utils';
import { fetchData } from './API';

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

test('InitialTimes return the correct value', () => {
  const today = new Date();
  const initialState = initializeTimes;
  const result = { avaiableTimes: fetchData(today) };
  expect(initialState).toEqual(result);
});

test('updateTimes returns the same state', () => {
  const state = {
    availableTimes: [
      '17:00',
      '17:30',
      '18:00',
      '19:00',
      '20:00',
      '20:30',
      '21:00',
      '23:00',
      '23:30',
    ],
  };
  const date = new Date();
  const newState = updateTimes(state, date);
  expect(newState).toEqual(state);
});

// test("submitAPI returns true", () => {
//   const formData = {
//     date: "2022-10-12",
//     time: "20:00",
//     guests: 5,
//     occasion: "Birthday",
//   };
//   const result = submitAPI(formData);
//   expect(result).toBe(true);
// });
