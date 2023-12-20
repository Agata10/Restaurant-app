import { Homepage } from './Homepage';
import { BookingPage } from './BookingPage';
import { Route, Routes } from 'react-router-dom';
import { useReducer, useState } from 'react';

function Main() {
  const initializeTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  const updateTimes = (state, date) => {
    return [...initializeTimes];
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <main>
      <Routes>
         <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/reservations"
          element={<BookingPage avaiableTimes={state} dispatch={dispatch} />}
        ></Route>
      </Routes>
    </main>
  );
}
export default Main;
