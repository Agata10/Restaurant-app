import { useState } from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Hamburger from '../images/hamburger.svg';

function Nav() {
  const [showNav, setShowNav] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleNavItems}>
        <img src={Hamburger} alt="hamburger" />
      </div>
      <ul className={`nav-elements  ${showNav && 'active'}`}>
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <HashLink className="nav-item" to="/#about">
            About
          </HashLink>
        </li>
        <li>
          <Link className="nav-item" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/reservations">
            Reservations
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/order-online">
            Order online
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
