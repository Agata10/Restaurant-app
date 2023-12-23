import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const BookingForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(props.avaiableTimes?.avaiableTimes[0]);
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');

  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Please enter at least 5 characters')
        .max(30, 'Maximum of 30 characters')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      date: Yup.date().required('Required'),
      time: Yup.string().required('Required'),
      guests: Yup.number()
        .min(1, 'At least 1 guest required')
        .max(10, 'Maximum of 10 guests')
        .required('Required'),
      occasion: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      submitForm(values);
      //alert(JSON.stringify(values, null, 2));
    },
  });

  const clearForm = () => {
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
  };

  const handleDateChange = (e) => {
    setDate(e);
    //props.dispatch(e);
  };

  const submitForm = (e) => {
    props.onSubmit({
      //for local storage
      name: e.name,
      email: e.email,
      date: e.date,
      time: e.time,
      guests: e.guests,
      occasion: e.occasion,
    });
    props.dispatch(e);
    clearForm();
  };

  return (
    <>
      <h1>Reserve a table</h1>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="name">Full name: </label>
        <input
          type="string"
          id="name"
          name="name"
          data-testid="name"
          autoComplete="on"
          onBlur={formik.handleBlur}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            formik.handleChange(e);
          }}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          data-testid="email"
          autoComplete="on"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="date">Choose date:</label>
        <input
          type="date"
          id="date"
          name="date"
          data-testid="date"
          value={date}
          onChange={(e) => {
            handleDateChange(e.target.value);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          name="time"
          data-testid="time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
        >
          {props.avaiableTimes?.avaiableTimes.map((avTime) => (
            <option key={avTime}>{avTime}</option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div>{formik.errors.time}</div>
        ) : null}
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          data-testid="guests"
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div>{formik.errors.guests}</div>
        ) : null}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          data-testid="occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
        >
          <option defaultValue="">Occasion</option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
          <option value="baby shower">Baby Shower</option>
          <option value="gender reveal">Gender Reveal</option>
          <option value="gradiuation">Gradiuation</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div>{formik.errors.occasion}</div>
        ) : null}
        <button
          id="submit"
          type="submit"
          value="Make Your reservation"
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
    </>
  );
};
