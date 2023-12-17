export const Chicago = ({ data }) => {
  return (
    <div className="chicago">
      <h1 className="chicago-title">{data.title}</h1>
      <h2 className={data.classVar}>{data.subtitle}</h2>
      <p className={data.classVar}>{data.description}</p>
    </div>
  );
};
