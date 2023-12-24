import React from 'react';
import { BookingForm } from './BookingForm';
import '../styles/BookingForm.css';

export const BookingPage = (props) => {
  return (
    <div className="booking-form">
      <BookingForm
        avaiableTimes={props.avaiableTimes}
        dispatch={props.dispatch}
        onSubmit={props.onSubmit}
      />
    </div>
  );
};
