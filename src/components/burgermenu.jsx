import React from 'react';
import Burgerlink from './burgerlink';

const Burger = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`burgermenu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
            <Burgerlink to="/" num="01" title="Home" />
            <Burgerlink to="/rituals" num="02" title="Rituals" />
            <Burgerlink to="/origins" num="03" title="Origins" />
            <Burgerlink to="/ingredients" num="04" title="Ingredients" />
            <Burgerlink to="/experience" num="05" title="Experience" />
        </div>
    );
}

export default Burger;