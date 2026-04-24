import React from 'react';
import './footer.css';
import footerimg from '../assets/footerimg.svg';
import footicons from "../assets/footicons.svg";
import ic1 from "../assets/ic1.svg";
import ic2 from "../assets/ic1-1.svg";
import ic3 from "../assets/ic1-2.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <>
        <footer>
            <img className='footerimg' src={footerimg} alt="Footer Image" />
            <div className="footerow">
                <div className="col1">
                    <p>Experience the origins of your modern day makeup</p>
                    <img src={footicons} alt="Footer Icons" className='footicons' />
                </div>
                <div className="col1">
                    <h1>Quick Links</h1>
                    <div className="links">
                        <Link to="/" className='footlink'>
                            <span>Home</span>
                        </Link>
                        <Link to="/rituals" className='footlink'>
                            <span>Rituals</span>
                        </Link>
                        <Link to="/origins" className='footlink'>
                            <span>Origins</span>
                        </Link>
                        <Link to="/ingredients" className='footlink'>
                            <span>Ingredients</span>
                        </Link>
                        <Link to="/experience" className='footlink'>
                            <span>Experience</span>
                        </Link>
                    </div>
                </div>
                <div className="col1">
                    <h1>Contact Info</h1>
                    <div className="coninfo">
                        <div className="conpair">
                            <img src={ic1} alt="Email Icon" className='conicon' />
                            <span> Nasr City, Cairo, Egypt</span>
                        </div>
                        <div className="conpair">
                            <img src={ic2} alt="Email Icon" className='conicon' />
                            <span>+20 2 2345 6789</span>
                        </div>
                        <div className="conpair">
                            <img src={ic3} alt="Email Icon" className='conicon' />
                            <span>info@nebet.org.eg</span>
                        </div>

                    </div>
                </div>
            </div>

            <span className='footspan'>© 2024 NEBET. All rights reserved.</span>
        </footer>
        
        </>
     );
}
 
export default Footer;