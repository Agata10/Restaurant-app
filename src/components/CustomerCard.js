import React from 'react';
import starsImg from '../images/star.png';

export const CustomerCard = ({ name, description, imageSrc, stars }) => {
  const starsStyle = {
    width: '20px',
    height: '20px',
  };
  const renderStars = () => {
    let imgArr = [];
    let id = 1;
    for (let i = 0; i < stars; i++) {
      imgArr = [
        ...imgArr,
        <img style={starsStyle} key={id} src={starsImg} alt="stars" />,
      ];
      id++;
    }
    return imgArr;
  };

  return (
    <div className="customer-card">
      <div className="stars-wrapper">{renderStars()}</div>
      <img src={imageSrc} alt="customer" />
      <h3 className="customer-name">{name}</h3>
      <p className="customer-opinion">{description}</p>
    </div>
  );
};
