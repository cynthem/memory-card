import React from 'react';
import title from '../assets/title.png';

const Header = () => {
    return (
        <div className="header">
            <img
            className="title-img"
            alt="Confundo"
            src={title}
            />
        </div>
    )
}

export default Header;