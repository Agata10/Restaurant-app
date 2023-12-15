import delievery from '../images/delievery.svg';
export const MenuCard = ({ title, price, description, imageSrc }) => {
  return (
    <div className="menu-card">
      <img src={imageSrc} alt="food" />
      <div className="menu-card-title">
        <h3 className="menu-card-name">{title}</h3>
        <h3 className="menu-card-price">{price}</h3>
      </div>
      <p className="menu-card-description">{description}</p>
      <div className="order-delivery">
        <h4 className="menu-card-delivery">Order a delievery</h4>
        <img
          className="menu-delievery-icon"
          src={delievery}
          alt="delievery icon"
        />
      </div>
    </div>
  );
};
