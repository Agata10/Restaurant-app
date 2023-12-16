import { Chicago } from './Chicago';
import { Button } from './Button';
import actionPic from '../images/restauranfood.jpg';

export const CallToAction = ({ data }) => {
  return (
    <div className="action">
      <div className="action-row1">
        <Chicago data={data} />
        <Button title="Reserve a table" />
      </div>
      <div className="action-row2">
        <img className="action" src={actionPic} alt="food" />
      </div>
    </div>
  );
};
