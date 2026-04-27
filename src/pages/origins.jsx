import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from '../components/burgermenu';
import Primarybtn from '../components/primarybtn';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ClickSpark from '../cursor/ClickSpark';
import AnimatedSVG from '../components/originshero';
import "./origins.css"

const Origins = () => {
        const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <>
        <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        >
            <main>
                <div className="origfirst">
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <div className="herorogins">
                        <div className="originsherotxt">
                                <h4>The</h4>
                                <h1>Origins</h1>
                                <h4>of Beauty</h4>
                        </div>
                        <div className="anim">
                        <AnimatedSVG duration={7} />

                        </div>
                    </div>
                    
                </div>
                <Footer />

            </main>

        </ClickSpark>
        </>
     );
}
 
export default Origins;