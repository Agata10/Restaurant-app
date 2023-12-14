import restaurant from '../images/restaurant.jpg';
import '../styles/Footer.css';
function Footer() {
  return (
    <footer>
      <img
        style={{ width: '160px', height: '200px' }}
        src={restaurant}
        alt="restaurant"
      />
      <section>
        <h4 className="links-section-header">Doormat Navigation</h4>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Menu</a>
          </li>
          <li>
            <a href="/#">Reservations</a>
          </li>
          <li>
            <a href="/#">Order online</a>
          </li>
          <li>
            <a href="/#">Login</a>
          </li>
        </ul>
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
