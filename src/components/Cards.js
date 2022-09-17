import React, { useState, useEffect } from 'react';
import Card from './Card';
import dolores from '../assets/dolores.jpg';
import hagrid from '../assets/hagrid.jpg';
import dumbledore from '../assets/dumbledore.jpg';
import ginny from '../assets/ginny.jpg';
import harry from '../assets/harry.jpg';
import hermione from '../assets/hermione.png';
import luna from '../assets/luna.jpg';
import malfoy from '../assets/malfoy.jpg';
import mcgonagall from '../assets/mcgonagall.jpg';
import ron from '../assets/ron.jpg';
import sirius from '../assets/sirius.jpg';
import voldemort from '../assets/voldemort.jpg';

const Cards = (props) => {
    const { score, bestScore, handleGame } = props;

    let characters = [
        {
            src: dolores,
            id: 'Dolores'
        },
        {
            src: hagrid,
            id: 'Hagrid'
        },
        {
            src: dumbledore,
            id: 'Dumbledore'
        },
        {
            src: ginny,
            id: 'Ginny'
        },
        {
            src: harry,
            id: 'Harry'
        },
        {
            src: hermione,
            id: 'Hermione'
        },
        {
            src: luna,
            id: 'Luna'
        },
        {
            src: malfoy,
            id: 'Malfoy'
        },
        {
            src: mcgonagall,
            id: 'McGonagall'
        },
        {
            src: ron,
            id: 'Ron'
        },
        {
            src: sirius,
            id: 'Sirius'
        }, 
        {
            src: voldemort,
            id: 'Voldemort'
        }
    ];

    const [cards, setCards] = useState(characters);

    const shuffleCards = (newDeck) => {
        for (let i = newDeck.length - 1; i > 0; i--) {
            let random = Math.floor(Math.random() * i);
            [newDeck[random], newDeck[i]] = [newDeck[i], newDeck[random]];
        }
    }

    useEffect(() => {
        const newDeck = [...cards];
        shuffleCards(newDeck);
        setCards(newDeck);
    }, [score, bestScore]);

    return (
        <div className="cards-grid">
            {cards.map((card) => (
                <Card 
                    key={card.id}
                    card={card}
                    handleGame={handleGame}
                />
            ))}
        </div>
    )
}

export default Cards;