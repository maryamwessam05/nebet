import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from '../components/burgermenu';
import Primarybtn from '../components/primarybtn';
import Footer from '../components/footer';
import ClickSpark from '../cursor/ClickSpark';
import Navbar from '../components/navbar';



const Experience = () => {
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
                <div className="first">
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                    
                </div>
                <Footer />

            </main>

        </ClickSpark>
        </>
     );
}
 
export default Experience;