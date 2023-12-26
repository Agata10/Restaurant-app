import React from 'react';
import '../styles/Specials.css';

const style = {
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0px',
  alignItems: 'center',
  fontFamily: 'var(--secondary-font-fam)',
  fontSize: '40px',
  fontWeight: '700',
  color: '#495E57',
  textAlign: 'center',
};

export const MenuLogin = (props) => {
  return (
    <div style={style}>
      <h1>{props.title}</h1>
      <h4>Comming Soon...</h4>
    </div>
  );
};
