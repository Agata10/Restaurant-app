import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Nav() {
  return (
    <nav>
      <ul>
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
          <Link class="nav-item" to="/reservations">
            Reservations
          </Link>
        </li>
        <li>
          <Link class="nav-item" to="/order-online">
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
