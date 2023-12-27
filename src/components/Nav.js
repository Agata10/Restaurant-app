import { useState } from 'react';
import '../styles/Nav.css';
import { Link, NavLink } from 'react-router-dom';
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
        <li onClick={toggleNavItems}>
          <NavLink
            className={(navData) =>
              navData.isActive ? ' nav-item underline' : 'nav-item'
            }
            to="/restaurant-app"
          >
            Home
          </NavLink>
        </li>
        <li onClick={toggleNavItems}>
          <HashLink className="nav-item" to="/restaurant-app/#about">
            About
          </HashLink>
        </li>
        <li onClick={toggleNavItems}>
          <NavLink
            className={(navData) =>
              navData.isActive ? ' nav-item underline' : 'nav-item'
            }
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li onClick={toggleNavItems}>
          <NavLink
            className={(navData) =>
              navData.isActive ? ' nav-item underline' : 'nav-item'
            }
            to="/reservations"
          >
            Reservations
          </NavLink>
        </li>
        <li onClick={toggleNavItems}>
          <Link
            target="_blank"
            className="nav-item"
            to="https://www.ubereats.com/"
          >
            Order online
          </Link>
        </li>
        <li onClick={toggleNavItems}>
          <NavLink
            className={(navData) =>
              navData.isActive ? ' nav-item underline' : 'nav-item'
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
