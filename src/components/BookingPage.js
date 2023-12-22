import React from 'react';
import { BookingForm } from './BookingForm';

export const BookingPage = (props) => {
  return (
    <div>
      <BookingForm
        avaiableTimes={props.avaiableTimes}
        dispatch={props.dispatch}
        onSubmit={props.onSubmit}
      />
    </div>
  );
};
