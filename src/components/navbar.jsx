import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg"
import wordmark from "../assets/wordmark.svg"
import "./navbar.css"

const Navbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            <div className='nav'>
                <Link to={"/"}>
                <img className='logo' src={logo} alt="" />
                
                </Link>
                <Link  to={"/"}>
                <img className='logos' src={wordmark} alt="" />
                
                </Link>
                <button  className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(prev => !prev)}>
                    <svg width="39" height="18" viewBox="0 0 39 18" fill="none">
                        <line className="line l1" x1="0" y1="1" x2="39" y2="1" />
                        <line className="line l2" x1="0" y1="9" x2="39" y2="9" />
                        <line className="line l3" x1="0" y1="17" x2="39" y2="17" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Navbar;