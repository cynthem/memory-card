import React from 'react';

const Scores = (props) => {
    const { score, bestScore } = props;

    return (
        <div className="scores">
            <div className="current-score">
                <p className='current-top'>Current score:</p>
                <p className='current-bottom'>{score}</p>
            </div>
            <div className="best-score">
                <p className='best-top'>Best score:</p>
                <p className='best-bottom'>{bestScore}</p>
            </div>
        </div>
    )
}

export default Scores;