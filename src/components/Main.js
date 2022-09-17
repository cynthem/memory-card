import React, { useState } from 'react';
import Scores from './Scores';
import Cards from './Cards';

const Main = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([]);

    const handleScore = () => {
        setScore((prevScore) => prevScore + 1);
    }

    const handleBestScore = () => {
        setBestScore((score));
    }

    const handleCard = (characterName) => {
        setCards((prevArr) => [...prevArr, characterName]);
    }

    const resetGame = () => {
        setScore(0);
        setCards([]);
    }

    const handleGame = (characterName) => {
        if (!cards.includes(characterName)) {
            handleCard(characterName);
            handleScore();
        } else {
            handleBestScore();
            resetGame();
        }
    }

    return (
        <div className="main">
            <Scores score={score} bestScore={bestScore} />
            <Cards 
                handleGame={handleGame} 
                score={score}
                bestScore={bestScore}
            />
        </div>
    )
}

export default Main;