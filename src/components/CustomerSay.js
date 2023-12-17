import React from 'react';
import { CustomerCard } from './CustomerCard';
import '../styles/CustomerSay.css';

export const CustomerSay = () => {
  const customers = [
    {
      id: 1,
      stars: 3,
      getSrc: () => require('../images/2.png'),
      name: 'Anna',
      description:
        '"Please fix your reserve a table option. It does not work!"',
    },
    {
      id: 2,
      stars: 5,
      getSrc: () => require('../images/1.png'),
      name: 'John',
      description: '"Great restaurant! Lots of variety in meals"',
    },
    {
      id: 3,
      stars: 5,
      getSrc: () => require('../images/4.png'),
      name: 'Diane',
      description: '"Love the chef special. You must try it!"',
    },
    {
      id: 4,
      stars: 4,
      getSrc: () => require('../images/5.png'),
      name: 'Tim',
      description: '"Wish they have more variety of drinks"',
    },
  ];
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="customers-wrapper">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            id={customer.id}
            name={customer.name}
            description={customer.description}
            imageSrc={customer.getSrc()}
            stars={customer.stars}
          />
        ))}
      </div>
    </div>
  );
};
