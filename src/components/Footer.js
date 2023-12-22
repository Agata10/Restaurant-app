import restaurant from '../images/restaurant.jpg';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <footer>
      <img
        style={{ borderRadius: '8px', width: '200px', height: '280px' }}
        src={restaurant}
        alt="restaurant"
      />
      <section>
        <h4 className="links-section-header">Doormat Navigation</h4>
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
      </section>
      <section>
        <h4 className="links-section-header">Contact</h4>
        <ul className="contact-info">
          <li>
            <a
              href="/https://www.google.com/maps/search/1234+Lincoln+Park+Chicago+60614/@41.9251221,-87.6723628,14z/data=!3m1!4b1?entry=ttu"
              className="company-info"
            >
              1234 Lincoln Park
              <br />
              Chicago 60614
            </a>
          </li>
          <li>
            <a href="/#" className="company-info">
              (784)-123-1234
            </a>
          </li>
          <li>
            <a href="mailto:littlelemon@gmail.com" className="company-info">
              littlelemon@gmail.com
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h4 className="links-section-header">Social media links</h4>
        <ul>
          <li>
            <a href="http://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="instagram.com">Instagram</a>
          </li>
          <li>
            <a href="twitter.com">Twitter</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
export default Footer;
