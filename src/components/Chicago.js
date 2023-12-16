import '../styles/Chicago.css';
export const Chicago = ({ data }) => {
  return (
    <div className="chicago">
      <h1 className="callAction-title about-title">{data.title}</h1>
      <h2 className="callAction-subtitle about-subtitle">{data.subtitle}</h2>
      <p className="callAction-description about-description">
        {data.description}
      </p>
    </div>
  );
};
