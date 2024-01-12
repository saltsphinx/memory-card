import { useState, useEffect } from 'react';
import Card from './Card';
import ScoreDisplay from './ScoreDisplay';
import imageApi from '../mock_api/imageApi';
import cardData from '../cardData';

export default function Game() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCardsArr, setClickedCardsArr] = useState([]);
  const [cardInfoArr, setCardInfoArr] = useState([]);

  useEffect(() => {
    const cardPromiseArray = cardData.map((cardId) => imageApi(cardId));

    Promise.all(cardPromiseArray).then((results) => {
      setCardInfoArr(results);
    });
  });

  if (cardInfoArr.length == 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="card-container">
          {cardInfoArr.map((card) => {
            return <Card key={card.id} cardInfo={card} />;
          })}
        </div>
        <ScoreDisplay currentScore={currentScore} bestScore={bestScore} />
      </>
    );
  }
}
