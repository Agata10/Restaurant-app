import React from 'react';
import { Chicago } from './Chicago';
import first from '../images/Mario and Adrian A.jpg';
import second from '../images/Mario and Adrian b.jpg';
import '../styles/About.css';

export const About = ({ data }) => {
  const classVar = 'about';
  const description =
    'Little Lemon is a charming neighborhood bistro that serves simple food and classic coctails in a lively but casual enviroment. The restaurant features a localy-sourced menu with daily specials.';
  return (
    <div id="about" className="about-wrapper">
      <Chicago data={{ ...data, description: description, classVar }} />
      <div className="about-pic-wrapper">
        <div
          className="first"
          style={{
            backgroundImage: `url('${first}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
          }}
          alt="mario and adrian"
        ></div>
        <div
          className="second"
          style={{
            backgroundImage: `url('${second}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
          }}
          alt="mario and adrian"
        ></div>
      </div>
    </div>
  );
};
