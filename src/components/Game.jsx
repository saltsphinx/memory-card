import { useState, useEffect } from 'react';
import Card from './Card';
import ScoreDisplay from './ScoreDisplay';
import imageApi from '../mock_api/imageApi';
import cardData from '../cardData';
import { randomIndices } from '../utilities';

export default function Game() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCardsSet, setClickedCardsSet] = useState(new Set());
  const [cardInfoArr, setCardInfoArr] = useState([]);

  useEffect(() => {
    const cardPromiseArray = cardData.map((cardId) => imageApi(cardId));

    Promise.all(cardPromiseArray).then((results) => {
      setCardInfoArr(results);
    });
  }, []);

  const handleOnClick = (id) => {
    randomizeCards();

    if (clickedCardsSet.has(id)) {
      resetGame();
      return;
    }

    const newSet = new Set(clickedCardsSet);
    newSet.add(id);

    setClickedCardsSet(newSet);
    setCurrentScore(currentScore + 1);
  };

  const resetGame = () => {
    currentScore > bestScore && setBestScore(currentScore);
    setCurrentScore(0);
    setClickedCardsSet(new Set());
  };

  const randomizeCards = () => {
    const newArr = [];
    randomIndices().forEach((index) => {
      newArr.push(cardInfoArr[index]);
    });

    setCardInfoArr(newArr);
  };

  if (cardInfoArr.length == 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="card-container">
          {cardInfoArr.map((card) => {
            return (
              <Card
                key={card.id}
                cardInfo={card}
                handleOnClick={handleOnClick}
              />
            );
          })}
        </div>
        <ScoreDisplay currentScore={currentScore} bestScore={bestScore} />
      </>
    );
  }
}
