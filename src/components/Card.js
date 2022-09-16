import React from 'react';
import dumbledore from '../assets/dumbledore.jpg';

const Card = () => {
    return (
        <div className="card">
            <img
            className="card-img"
            alt="Dumbledore"
            src={dumbledore}
            />
        </div>
    )
}

export default Card;