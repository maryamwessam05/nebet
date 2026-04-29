import React, { useEffect, useState , useRef } from 'react';
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
import "./home.css"
import Title from '../components/title';
import Expect from '../components/expect';
import ex1 from "../assets/ex01.png"
import ex2 from "../assets/ex02.png"
import ex3 from "../assets/ex03.png"
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import arrow from "../assets/arrow.svg"
import ticket from "../assets/ticket.svg";
import { supabase } from "../supabase";
import Preloader from './preloader';




const Experience = () => {
                const [menuOpen, setMenuOpen] = useState(false);
                    const [num, setNum] = useState(0);
                    const [content, setContent] = useState({});
                    const preloaderRef = useRef(null);
const [visible, setVisible] = useState(true);

                    
 useEffect(() => {
        const getContent = async () => {
            const res = await supabase.from("webcontent").select("*");
            const map = {};
            res.data.forEach(item => { map[item.identifier] = item; });
            setContent(map);
        };
        getContent();
    }, []);
        const increment = () => setNum(num + 1);
    const decrement = () => setNum(num - 1);

      useEffect(() => {
    const timer = setTimeout(() => {
        preloaderRef.current.style.transition = "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)";
        preloaderRef.current.style.transform = "translateY(-100%)";

        setTimeout(() => {
            setVisible(false);
        }, 800);
    }, 2000);

    return () => clearTimeout(timer);
}, []);

    return ( 
        <>
        {visible && (
            <div ref={preloaderRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
                <Preloader />
            </div>
        )}
           <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        >
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>
                <div className="first">
                    <div className="exhertxt">
                    <div className="ingherotxt">
                        <BlurText text={content.experience_hero_the?.text} delay={200} animateBy="words" direction="top" className="originsub" />
                        <BlurText text={content.experience_hero_title?.text} delay={400} animateBy="Origins" direction="top" className="originstit" />
                    </div>

                    </div>
                    <Preview />
                </div>
                <div className="whatto">
                    <Title text={content.experience_whatto_title?.text} />
                    
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

                <div className="section6">
                    <Title text={content.home_experience_title?.text} />
                   
                    <div className="sec6cont">
                        <div className="sec6form">
                        <svg class="formbg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1171 571" fill="none" preserveAspectRatio="none">
                        <path d="M1170 1V225.104C1141.07 225.718 1118 252.917 1118 286.077C1118 319.237 1141.07 346.435 1170 347.049V570H1V347.049C29.9336 346.435 52.9998 319.237 53 286.077C53 252.917 29.9337 225.718 1 225.104V1H1170ZM1072.4 286.028C1072.4 316.403 1093.49 341.343 1120 341.956V546H50V341.956C76.5055 341.343 97.6035 316.403 97.6035 286.028C97.6035 255.653 76.5055 230.713 50 230.1V25H1120V230.1C1093.49 230.713 1072.4 255.653 1072.4 286.028ZM1074.4 286.028C1074.4 256.098 1095.39 232.087 1121 232.087H1122V23H48V232.087H49C74.6088 232.087 95.6035 256.098 95.6035 286.028C95.6035 315.959 74.6088 339.97 49 339.97H48V548H1122V339.97H1121C1095.39 339.97 1074.4 315.959 1074.4 286.028Z" fill="#F0E1CE" stroke="#1E1E1E" stroke-width="2"/>
                        </svg>
                            <form action="">
                                <div className="row1">
                                    <div className="group">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" />
                                    </div>

                                </div>
                                <div className="row1">
                                    <div className="group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="">Number of tickets</label>
                                        <div className="tick">
                                        <button className='tickbtn' type="button" onClick={decrement}><img src={minus} alt="" /></button>
                                        <h1>{num}</h1>
                                        <button className='tickbtn' type="button" onClick={increment}><img src={plus} alt="" /></button>
                                        </div>
                                        
                                    </div>

                                </div>
                                <div className="row1">
                                    <div className="group">
                                        <label htmlFor="">Date</label>
                                        <input type="date" />
                                    </div>
                                    <div className="group">
                                    <label htmlFor="time-slot">Date</label>
                                    <div className="select-wrapper">
                                        <select id="time-slot">
                                        <option value="">Select a time</option>
                                        <option value="9-11am">9 - 11 AM</option>
                                        <option value="1-3pm">1 - 3 PM</option>
                                        <option value="4-6pm">4 - 6 PM</option>
                                        </select>
                                    </div>
                                    </div>

                                </div>
                                <div className="signup">
                                <div className="circbutton"></div>
                                    <h4>{content.home_signup_label?.text}</h4>

                            </div>
                            <div className="formbtn">
                                <Primarybtn style="primarybtn" icon={ticket} text="Book Tickets" />

                            </div>
                            </form>

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