import logo from '../images/Logo .svg';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/restaurant-app/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
