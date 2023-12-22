import { Homepage } from './Homepage';
import { BookingPage } from './BookingPage';
import { ConfirmedBooking } from './ConfirmedBooking';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchData, submitAPI } from '../API';

const initializeTimes = { avaiableTimes: fetchData(new Date()) };

const updateTimes = (state, date) => {
  state = { avaiableTimes: fetchData(new Date(date)) };
  return state;
};

function Main() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    submitAPI(formData);
    if (submitAPI(formData)) {
      navigate('/reservations/confirmation');
      localStorage.setItem('Bookings', JSON.stringify(formData));
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/reservations"
          element={
            <BookingPage
              avaiableTimes={state}
              dispatch={dispatch}
              onSubmit={submitForm}
            />
          }
        ></Route>
        <Route
          path="/reservations/confirmation"
          element={<ConfirmedBooking />}
        ></Route>
      </Routes>
    </main>
  );
}
export default Main;
