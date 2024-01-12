export default function ScoreDisplay({ currentScore, bestScore }) {
  return (
    <div className="score-display">
      <p>
        Current Score: <span>{currentScore} / 12</span>
      </p>
      <p>
        Best score: <span>{bestScore}</span>
      </p>
    </div>
  );
}
