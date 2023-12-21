import React from 'react';
import { useState } from 'react';

export const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('birthday');

  const clearForm = () => {
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
  };

  const getIsFormValid = () => {
    return date && time && guests && occasion;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      'Date ' +
        date +
        ' time ' +
        time +
        ' guests: ' +
        guests +
        ' ocassion ' +
        occasion,
    );
    clearForm();
    props.onSubmit();
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <>
      <h1>Book now</h1>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={date}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        >
          {props.avaiableTimes?.map((avTime) => (
            <option key={avTime}>{avTime}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
        >
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
          <option value="baby shower">Baby Shower</option>
          <option value="gender reveal">Gender Reveal</option>
          <option value="gradiuation">Gradiuation</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          disabled={!getIsFormValid()}
        />
      </form>
    </>
  );
};
