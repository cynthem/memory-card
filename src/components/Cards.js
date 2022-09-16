import React from 'react';
import Card from './Card';

const Cards = (/*{ characters }*/) => {
    /*const characterCards = characters.map((character) => (
        <Card key={character.id} />
    ));

    return (
        <div className="cards">
            {characterCards}
        </div>
    )*/

    return (
        <div className="cards-grid">
            <Card />
        </div>
    )
}

export default Cards;