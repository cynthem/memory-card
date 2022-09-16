import React from 'react';

const Scores = () => {
    return (
        <div className="scores">
            <div className="current-score">
                <p className='current-top'>Current score:</p>
                <p className='current-bottom'>12</p>
            </div>
            <div className="best-score">
                <p className='best-top'>Best score:</p>
                <p className='best-bottom'>1</p>
            </div>
        </div>
    )
}

export default Scores;