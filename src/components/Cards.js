import React from 'react';
import Card from './Card';

const Cards = ({ characters }) => {
    const characterCards = characters.map((character) => (
        <Card key={character.id} />
    ));
    
    return (
        <div className="cards">
            {characterCards}
        </div>
    )
}

export default Cards;