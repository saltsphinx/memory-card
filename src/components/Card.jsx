export default function Card({ cardInfo, handleOnClick }) {
  return (
    <button className="card" onClick={() => handleOnClick(cardInfo.id)}>
      <img src={cardInfo.src} />
      <h2>{cardInfo.name}</h2>
    </button>
  );
}
