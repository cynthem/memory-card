import React, { useState, useEffect } from 'react';
import Scores from './Scores';
import Cards from './Cards';

const Main = () => {
    const [characters, setCharacters] = useState([]);

    return (
        <div className="main">
            <Scores />
            <Cards /*characters={characters}*/ />
        </div>
    )
}

export default Main;