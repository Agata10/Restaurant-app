import React from 'react';
//import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const BookingForm = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      time: props.avaiableTimes.avaiableTimes[0],
      guests: '1',
      occasion: 'birthday',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Please enter at least 5 characters')
        .max(30, 'Maximum of 30 characters')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      date: Yup.date().required('Required'),
      guests: Yup.number()
        .min(1, 'At least 1 guest required')
        .max(10, 'Maximum of 10 guests')
        .required('Required'),
    }),
    onSubmit: (values) => {
      submitForm(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const submitForm = (e) => {
    console.log(e);
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
  };

  return (
    <>
      <h1>Book now</h1>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="name">Full name: </label>
        <input
          type="string"
          id="name"
          name="name"
          autocomplete="on"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          autocomplete="on"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="date">Choose date: </label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
        />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          name="time"
          onChange={formik.handleChange}
          value={formik.values.time}
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
          onChange={formik.handleChange}
          value={formik.values.guests}
          onBlur={formik.handleBlur}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div>{formik.errors.guests}</div>
        ) : null}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={formik.handleChange}
          value={formik.values.occasion}
          onBlur={formik.handleBlur}
        >
          <option value=""></option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
          <option value="baby shower">Baby Shower</option>
          <option value="gender reveal">Gender Reveal</option>
          <option value="gradiuation">Gradiuation</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div>{formik.errors.guests}</div>
        ) : null}
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};
