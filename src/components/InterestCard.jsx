function InterestCard() {
  const hobby = "Soccer";
  const emoji = "⚽";
  const description = "I like playing soccer with my friends.";
  const rating = "10/10";

  return (
    <div className="card">
      <span style={{ fontSize: "48px" }}>{emoji}</span>
      <h3>{hobby}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default InterestCard;