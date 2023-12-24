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
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? ' nav-item underline' : 'nav-item'
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <HashLink className="nav-item" to="/#about">
            About
          </HashLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? ' nav-item underline' : 'nav-item'
            }
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? ' nav-item underline' : 'nav-item'
            }
            to="/reservations"
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            target="_blank"
            className={(navData) =>
              navData.isActive ? ' nav-item underline' : 'nav-item'
            }
            to="https://www.ubereats.com/"
          >
            Order online
          </NavLink>
        </li>
        <li>
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
