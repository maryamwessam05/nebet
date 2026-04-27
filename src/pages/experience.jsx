import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from '../components/burgermenu';
import Primarybtn from '../components/primarybtn';
import Footer from '../components/footer';
import ClickSpark from '../cursor/ClickSpark';
import Navbar from '../components/navbar';
import BlurText from '../blurtext/BlurText';
import Preview from '../components/Preview';
import "./experience.css"
import "./ingredients.css"
import Title from '../components/title';
import Expect from '../components/expect';
import ex1 from "../assets/ex01.png"
import ex2 from "../assets/ex02.png"
import ex3 from "../assets/ex03.png"




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
                    <div className="ingherotxt">
                        <BlurText text="The" delay={200} animateBy="words" direction="top" className="originsub" />
                        <BlurText text="NEBET" delay={400} animateBy="Origins" direction="top" className="originstit" />
                    </div>
                    <Preview />
                </div>
                <div className="whatto">
                    <Title text="What to Expect" />
                    <div className="expectgrid">
                        <Expect style="exdark" stylexp="exptxt" title="Immersive Exploration" desc="Experience rituals through interactive visuals and storytelling." img={ex1} />
                        <Expect style="exlight" stylexp="exptxtl" title="Ritual-Based Displays" desc="Discover how beauty was practiced step by step." img={ex2} />
                        <Expect style="exdark" stylexp="exptxt" title="Sensory Atmosphere" desc="A space designed to reflect the essence of ancient practices." img={ex3} />

                    </div>
                </div>

                <div className="eventcard">
                    <div className="beige">
                        <div className="beigetxt">
                            <h3>About NEBET</h3>
                        <p>is a digital and conceptual exhibition that explores the origins of beauty through Ancient Egyptian rituals, focusing on skincare and makeup as practices of care, identity, and meaning.</p>
                        </div>
                        
                    </div>
                    <div className="greycard">
                        <div className="gretxt">
                          <h3>Details</h3>
                        <div className="detpair">
                            <h6>Duration</h6>
                            <p>45-60 minutes</p>
                        </div>
                        <div className="detpair">
                            <h6>Format</h6>
                            <p>Interactive digital experience</p>
                        </div>
                        <div className="detpair">
                            <h6>Type</h6>
                            <p>Timed reservations</p>
                        </div>  
                        </div>
                        
                    </div>
                </div>
                <Footer />

            </main>

        </ClickSpark>
        </>
     );
}
 
export default Experience;