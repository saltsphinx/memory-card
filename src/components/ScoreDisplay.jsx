export default function ScoreDisplay({ currentScore, bestScore }) {
  return (
    <div className="score-display">
      <p>
        <span className="small">Current Score: </span>{' '}
        <span className="score">{currentScore} / 12</span>
      </p>
      <p>
        <span className="small">Best Score: </span>{' '}
        <span className="score">{bestScore}</span>
      </p>
    </div>
  );
}
