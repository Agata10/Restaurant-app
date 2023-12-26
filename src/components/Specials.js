import { Button } from './Button';
import { MenuCard } from './MenuCard';
import '../styles/Specials.css';
const specials = [
  {
    title: 'Greek Salad',
    price: '12.99$',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
    getImageSrc: () => require('../images/greek salad.jpg'),
  },
  {
    title: 'Bruchetta',
    price: '5.99$',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    getImageSrc: () => require('../images/bruchetta.png'),
  },
  {
    title: 'Lemon Dessert',
    price: '5.00$',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    getImageSrc: () => require('../images/lemon dessert.jpg'),
  },
];

export const Specials = () => {
  return (
    <div className="specials">
      <div className="specials-title-wrapper">
        <h1 className="specials-title">This weeks specials!</h1>
        <Button className="btn-menu" title="Online Menu" link="/menu" />
      </div>

      <div className="specials-cards-wrapper">
        {specials.map((special) => (
          <MenuCard
            key={special.title}
            title={special.title}
            price={special.price}
            description={special.description}
            imageSrc={special.getImageSrc()}
          />
        ))}
      </div>
    </div>
  );
};
