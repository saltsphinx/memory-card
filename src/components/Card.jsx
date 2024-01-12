export default function Card({ cardInfo, onClick }) {
  return (
    <button className="card" onClick={() => onClick(cardInfo.id)}>
      <img src={cardInfo.src} />
      <h2>{cardInfo.name}</h2>
    </button>
  );
}
