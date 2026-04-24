import React, { useState, useRef } from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import Burger from '../components/burgermenu';
import Footer from '../components/footer';
import ClickSpark from '../cursor/ClickSpark';
import ChromaCard from '../chromapic/ChromaGrid';
import rithero from '../assets/rithero.png';
import './home.css';
import './rituals.css';


const Rituals = () => {
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
                
                <div className="firstrit">
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />  
                    <div style={{ width: '100%' , height: "70vh"}}>
                    <ChromaCard item={{ image: rithero }} />
                    </div>
                    <div className="ritherotxt">
                    <h1>The Rituals</h1>
                    <p>Beauty in Ancient Egypt was not applied — it was performed.</p>
                </div>
                </div>



                <Footer />
            </main>

        </ClickSpark>
        
            
        </>
     );
}
 
export default Rituals;