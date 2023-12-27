import { Homepage } from './Homepage';
import { BookingPage } from './BookingPage';
import { ConfirmedBooking } from './ConfirmedBooking';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchData, submitAPI } from '../API';
import { MenuLogin } from './MenuLogin';

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
      localStorage.setItem('Reservation', JSON.stringify(formData));
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/restaurant-app/" element={<Homepage />}></Route>
        <Route
          path="/restaurant-app/menu"
          element={<MenuLogin title={'Our Menu'} />}
        ></Route>
        <Route
          path="/restaurant-app/reservations"
          element={
            <BookingPage
              avaiableTimes={state}
              dispatch={dispatch}
              onSubmit={submitForm}
            />
          }
        ></Route>
        <Route
          path="/restaurant-app/reservations/confirmation"
          element={<ConfirmedBooking />}
        ></Route>
        <Route
          path="/restaurant-app//login"
          element={<MenuLogin title={'Login'} />}
        ></Route>
      </Routes>
    </main>
  );
}
export default Main;
