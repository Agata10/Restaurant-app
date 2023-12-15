export const Chicago = ({ data }) => {
  return (
    <div className="chicago">
      <h1 className="chicago-title">{data.title}</h1>
      <h3 className="chicago-subtitle">{data.subtitle}</h3>
      <p className="chicago-description">{data.description}</p>
    </div>
  );
};
