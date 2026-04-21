import React, { useState } from 'react';
import "./home.css";
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import Burger from '../components/burgermenu';
import framehero from "../assets/framehero.png";
import Primarybtn from '../components/primarybtn';
import UnicornScene from "unicornstudio-react";
import ticket from "../assets/ticket.svg";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <main>
                <div className="first">
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                    <div className="hero">
                        <div className="frame">
                            <img src={framehero} alt="" />
                        </div>
                        <div className="heroimage">
                            <div className="heroinner">
                                <div className="herobtn">
                                <Primarybtn style="primarybtnnoimg" text="Unveil the look" />

                                </div>
                                {/* <img className='heroframe' src={heroframe} alt="" /> */}
                                <div className="heroimage2">
                                       <UnicornScene
                                        projectId="87LJRPoYvs120bTtnK4q"
                                        width="700px"
                                        height="500px"
                                        scale={1}
                                        dpi={1.5}
                                        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.9/dist/unicornStudio.umd.js"
                                        />


                                </div>
                                <Link className="herobtn2" to="/booking">
                                    <div >
                                    <Primarybtn style="primarybtn" icon={ticket} text="Book Tickets" />

                                    </div>
                                
                                </Link>
                            </div>
                        </div>
                        <div className="frame">
                            <img src={framehero} alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;