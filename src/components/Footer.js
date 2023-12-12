import restaurant from '../images/restaurant.jpg';
function Footer() {
  return (
    <footer>
      <img
        style={{ width: '160px', height: '200px' }}
        src={restaurant}
        alt="restaurant"
      />
      <section>
        <h6>Doormat Navigation</h6>
        <ul>
          <li>
            <a href="/#">Home</a>
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
          </li>
        </ul>
      </section>
      <section>
        <h6>Contact</h6>
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
        <h6>Social media links</h6>
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
