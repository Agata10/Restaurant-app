import { Chicago } from './Chicago';
import { Button } from './Button';
import actionPic from '../images/restauranfood.jpg';
import '../styles/CallToAction.css';

export const CallToAction = ({ data }) => {
  const classVar = 'callAction';
  return (
    <div className="action-background">
      <div className="action">
        <div className="action-row1">
          <Chicago data={{ ...data, classVar }} />
          <Button title="Reserve a table" />
        </div>
        <div className="action-row2">
          <img className="action-img" src={actionPic} alt="food" />
        </div>
      </div>
    </div>
  );
};
