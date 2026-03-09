function Card() {
  const title = "soccer app";
  const description = "This is a description of something cool I built.";
  const emoji = "🔥"; 

  return (
    <div className="card">
      <span style={{ fontSize: "48px" }}>{emoji}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;