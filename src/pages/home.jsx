import React, { useState, useRef } from 'react';
import "./home.css";
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import Burger from '../components/burgermenu';
import Primarybtn from '../components/primarybtn';
import UnicornScene from "unicornstudio-react";
import ticket from "../assets/ticket.svg";
import hier2 from "../assets/hiero02.png";
import hier3 from "../assets/hiero03.png";
import hier4 from "../assets/hiero04.png";
import ScrollReveal from "../componentsec2txt/ScrollReveal";
import ImageTrail from '../componentimagehover/ImageTrail';
import img1 from "../assets/img01.png";
import img2 from "../assets/img02.png";
import img3 from "../assets/img03.png";
import img4 from "../assets/img04.png";
import img5 from "../assets/img05.png";
import img6 from "../assets/img06.png";
import img7 from "../assets/img07.png";
import Title from '../components/title';
import Origin from '../components/origin';
import orig1 from "../assets/orig01.png";
import orig2 from "../assets/orig02.png";
import orig3 from "../assets/orig03.png";
import orig4 from "../assets/orig04.png";
import orig5 from "../assets/orig05.png";
import { motion, useScroll, useTransform } from "framer-motion";



const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const originsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: originsRef,
        offset: ["start start", "end end"],
    });
    const ITEM_WIDTH = 320;
const GAP = 45;
const ITEMS_COUNT = 3;
const PADDING_LEFT = 50;
const totalDistance = (ITEMS_COUNT - 1) * (ITEM_WIDTH + GAP) - PADDING_LEFT;
const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);
    return (
        <>
            <main>
                <div className="first">
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                    <div className="hero">
                        <div className="frame">
                            <div className="imageframe">
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
                                <img src={hier3} alt="" />
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
                                {/* duplicated for seamless loop */}
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
                                <img src={hier3} alt="" />
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
                            </div>
                        </div>

                        <div className="heroimage">
                            <div className="heroinner">
                                <div className="herobtn">
                                    <Primarybtn style="primarybtnnoimg" text="Unveil the look" />
                                </div>
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
                                    <Primarybtn style="primarybtn" icon={ticket} text="Book Tickets" />
                                </Link>
                            </div>
                        </div>

                        <div className="frame">
                            <div className="imageframe">
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
                                <img src={hier3} alt="" />
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
                                {/* duplicated for seamless loop */}
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
                                <img src={hier3} alt="" />
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section2">
                    <div className="textcont">
                        <ScrollReveal
                        baseOpacity={0.1}
                        enableBlur
                        baseRotation={0}
                        blurStrength={4}
                        wordAnimationEnd="bottom 50%"
                        rotationEnd="bottom 20%"
                    >
                        What you use today was never created it was inherited. Refined over time, but never truly changed.
                    </ScrollReveal>
                    </div>
                    <div style={{ height: '350px', width: '100%', position: 'absolute'}}>
                    <ImageTrail
                    
                        items={[img1, img2, img3, img4, img5, img6, img7]}
                          variant="2"
                    />
                    </div>
                </div>

                <div className="section3">
                    <div className="categ">
                                    <h1>Makeup Rituals</h1>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="25" viewBox="0 0 43 25" fill="none">
                                            <path
                                                d="M28.6667 0C28.6667 1.325 29.98 3.30357 31.3094 4.96429C33.0186 7.10714 35.0611 8.97679 37.4028 10.4036C39.1587 11.4732 41.2872 12.5 43 12.5M43 12.5C41.2872 12.5 39.1569 13.5268 37.4028 14.5964C35.0611 16.025 33.0186 17.8946 31.3094 20.0339C29.98 21.6964 28.6667 23.6786 28.6667 25M43 12.5H9.53674e-07"
                                                stroke={"#F0E1CE"}
                                                strokeWidth="2.58333"
                                            />
                                        </svg>
                                    </button>
                                </div>
                    <div className="categs">
                                    <h1>Skincare Rituals</h1>
                                    <button className="blackarrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="25" viewBox="0 0 43 25" fill="none">
                                            <path
                                                d="M28.6667 0C28.6667 1.325 29.98 3.30357 31.3094 4.96429C33.0186 7.10714 35.0611 8.97679 37.4028 10.4036C39.1587 11.4732 41.2872 12.5 43 12.5M43 12.5C41.2872 12.5 39.1569 13.5268 37.4028 14.5964C35.0611 16.025 33.0186 17.8946 31.3094 20.0339C29.98 21.6964 28.6667 23.6786 28.6667 25M43 12.5H9.53674e-07"
                                                stroke={"#1E1E1E"}
                                                strokeWidth="2.58333"
                                            />
                                        </svg>
                                    </button>
                                </div>
                </div>

                <div className="section4">
                    <Title
                        text="Origins of Beauty"
                        description="What we recognize today as beauty products are the result of centuries of refinement. Their origins, however, lie in the rituals of Ancient Egypt — where every element served both purpose and meaning."
                    />

                    <div ref={originsRef} className="origins-scroll-container">
                        <div className="origins-sticky-wrapper">
                            <motion.div className="origincont" style={{ x }}>
                                <Origin style="origin"  number="01" image={orig1} title="Eyeliner"    derivedFrom="Kohl (3000 BC)"              description="Used for protection and spiritual defense." />
                                <Origin style="origin2" number="02" image={orig2} title="Face Mask"   derivedFrom="Milk & Honey Rituals"        description="Used for nourishment and renewal." />
                                <Origin style="origin"  number="03" image={orig3} title="Serums"      derivedFrom="Natural Oils"                description="Used for healing and protection." />
                                <Origin style="origin2" number="04" image={orig4} title="Eyeshadow"   derivedFrom="Malachite & Charcoal Pigments" description="Crushed minerals that add color while symbolizing protection and vitality." />
                                <Origin style="origin"  number="05" image={orig5} title="Lip Balm"    derivedFrom="Resin & Wax Treatment"       description="Natural balms used to protect and soften lips in harsh climates." />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;