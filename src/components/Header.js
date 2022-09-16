import React from 'react';
import title from '../assets/title.png';
import broomLeft from '../assets/broomLeft.png';
import broomRight from '../assets/broomRight.png';

const Header = () => {
    return (
        <div className="header">
            <img
            className="broom-left"
            alt="Broom"
            src={broomLeft}
            />
            <img
            className="title-img"
            alt="Confundo"
            src={title}
            />
            <img
            className="broom-right"
            alt="Broom"
            src={broomRight}
            />
        </div>
    )
}

export default Header;