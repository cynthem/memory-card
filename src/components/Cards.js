import React, { useState, useEffect } from 'react';
import Card from './Card';
import dolores from '../assets/dolores';
import hagrid from '../assets/hagrid';
import dumbledore from '../assets/dumbledore';
import ginny from '../assets/ginny';
import harry from '../assets/harry';
import hermione from '../assets/hermione';
import luna from '../assets/luna';
import malfoy from '../assets/malfoy';
import mcgonagall from '../assets/mcgonagall';
import ron from '../assets/ron';
import sirius from '../assets/sirius';
import voldemort from '../assets/voldemort';

const Cards = (props) => {
    const { score, bestScore, handleGame } = props;

    let characters = [
        {
            src: dolores,
            id: 'dolores'
        },
        {
            src: hagrid,
            id: 'hagrid'
        },
        {
            src: dumbledore,
            id: 'dumbledore'
        },
        {
            src: ginny,
            id: 'ginny'
        },
        {
            src: harry,
            id: 'harry'
        },
        {
            src: hermione,
            id: 'hermione'
        },
        {
            src: luna,
            id: 'luna'
        },
        {
            src: malfoy,
            id: 'malfoy'
        },
        {
            src: mcgonagall,
            id: 'mcgonagall'
        },
        {
            src: ron,
            id: 'ron'
        },
        {
            src: sirius,
            id: 'sirius'
        }, 
        {
            src: voldemort,
            id: 'voldemort'
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