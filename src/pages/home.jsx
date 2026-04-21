import React, { useState } from 'react';
import "./home.css";
import Navbar from '../components/navbar';
import Burger from '../components/burgermenu';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <main>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </main>
        </>
    );
}

export default Home;