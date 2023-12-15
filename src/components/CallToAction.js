import { Chicago } from './Chicago';
import { Button } from './Button';
import actionPic from '../images/restauranfood.jpg';

export const CallToAction = () => {
  const chicago = {
    title: 'Little Lemon',
    subtitle: 'Chicago',
    description:
      'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
  };
  return (
    <div className="action">
      <div className="action-row1">
        <Chicago data={chicago} />
        <Button title="Reserve a table" />
      </div>
      <div className="action-row2">
        <img className="action" src={actionPic} alt="food" />
      </div>
    </div>
  );
};
