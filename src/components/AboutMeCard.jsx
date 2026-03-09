function AboutMeCard() {
  const name = "Kainoa";
  const emoji = "😎";
  const bio = "I'm learning React and robotics.";
  const funFact = "I like soccer.";

  return (
    <div className="card">
      <span style={{ fontSize: "48px" }}>{emoji}</span>
      <h3>{name}</h3>
      <p>{bio}</p>
      <p>Fun fact: {funFact}</p>
    </div>
  );
}

export default AboutMeCard;