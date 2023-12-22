import { Link } from 'react-router-dom';

const linkStyle = {
  fontFamily: 'var(--secondary-font-fam)',
  fontSize: '16px',
  fontWeight: '700',
  color: 'black',
};
export const Button = (props) => {
  return (
    <button className="btn" type="button">
      <Link to={props.link} style={linkStyle}>
        {' '}
        {props.title}{' '}
      </Link>
    </button>
  );
};
