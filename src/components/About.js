import React from 'react';
import { Chicago } from './Chicago';
import first from '../images/Mario and Adrian A.jpg';
import second from '../images/Mario and Adrian b.jpg';

export const About = ({ data }) => {
  return (
    <div className="about-wrapper">
      <Chicago data={{ ...data, description: 'About' }} />
      <div className="about-pic-wrapper">
        <img src={first} alt="mario and adrian" />
        <img src={second} alt="mario and adrian" />
      </div>
    </div>
  );
};
