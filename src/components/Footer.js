import restaurant from '../images/restaurant.jpg';
import '../styles/Footer.css';
import Nav from './Nav';

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
        <Nav />
      </section>
      <section>
        <h4 className="links-section-header">Contact</h4>
        <ul>
          <li>
            <a href="/#">Adres</a>
          </li>
          <li>
            <a href="/#">Phone</a>
          </li>
          <li>
            <a href="/#">Email</a>
          </li>
        </ul>
      </section>
      <section>
        <h4 className="links-section-header">Social media links</h4>
        <ul>
          <li>
            <a href="/#">Adres</a>
          </li>
          <li>
            <a href="/#">Phone</a>
          </li>
          <li>
            <a href="/#">Email</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
export default Footer;
