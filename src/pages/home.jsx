import React, { useState, useRef , useEffect } from 'react';
import "./home.css";
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import Burger from '../components/burgermenu';
import Primarybtn from '../components/primarybtn';
import UnicornScene from "unicornstudio-react";
import ticket from "../assets/ticket.svg";
import hier2 from "../assets/hier.svg";
import hier3 from "../assets/hier.svg";
import hier4 from "../assets/hier.svg";
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
import prod1 from "../assets/prod01.png";
import prod2 from "../assets/prod02.png";
import prod3 from "../assets/prod03.png";
import prod4 from "../assets/prod04.png";
import prod5 from "../assets/prod05.png";
import prod6 from "../assets/prod06.png";
import FlyingPosters from '../componentproduct/FlyingPosters';
import lotus from "../assets/lorus.png";
import RotatingText from '../textprod/RotatingText';
import bgvid from "../assets/bg.mp4";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import arrow from "../assets/arrow.svg"
import Footer from '../components/footer';
import ClickSpark from '../cursor/ClickSpark';
import { supabase } from "../supabase";
import formbg from "../assets/bookingbg.svg"
import sec5 from "../assets/lorus.svg"
import formbgb from "../assets/formbgblack.svg"
import Preloader from './preloader';
import verlogo from "../assets/verlogo.svg"
import close from "../assets/x.svg"


const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const originsRef = useRef(null);
    const [num, setNum] = useState(0);
        const [content, setContent] = useState([]);
        const [origins, setOrigins] = useState([]);

        const [ritual, setRitual] = useState([]);
    const [visible, setVisible] = useState(true);
    const [popupVisible, setPopupVisible] = useState(false);
const preloaderRef = useRef(null);

    useEffect(() => {
            const getContent = async () => {
            const res = await supabase.from("webcontent").select("*");
            const map = {};
            res.data.forEach(item => { map[item.identifier] = item; });
            setContent(map);

            const originsRes = await supabase
                .from("modern_makeup_origins")  // fix table name (underscore not dot)
                .select("name, derived_from, description, image_url");
            
            if (originsRes.data) setOrigins(originsRes.data);
        };

            const getRituals = async() => {
                        const res = await supabase.from("ritual").select("*");
                        console.log(res.data);
                        setRitual(res.data);

                    }
                    getRituals();
        }, []);

    const getResponsiveValues = () => {
  if (typeof window === "undefined") return { itemWidth: 270, itemsCount: 4 };
  const w = window.innerWidth;
  if (w >= 600 && w <= 1024) return { itemWidth: 200, itemsCount: 4 };
  if (w < 600) return { itemWidth: 150, itemsCount: 1 };
  return { itemWidth: 270, itemsCount: 4 };
};

const [{ itemWidth, itemsCount }, setResponsive] = useState(getResponsiveValues);

useEffect(() => {
  const handleResize = () => setResponsive(getResponsiveValues());

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const GAP = 70;
const PADDING_LEFT = 50;
const totalDistance = (itemsCount - 1) * (itemWidth + GAP) - PADDING_LEFT;

const { scrollYProgress } = useScroll({
  target: originsRef,
  offset: ["start start", "end end"],
});
const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);



    const increment = () => setNum(num + 1);
    const decrement = () => setNum(num - 1);

    
   useEffect(() => {
    const timer = setTimeout(() => {
        preloaderRef.current.style.transition = "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)";
        preloaderRef.current.style.transform = "translateY(-100%)";

        setTimeout(() => {
            setVisible(false);
            setPopupVisible(true);
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
                {popupVisible && (
                <div className="popupad">
                    <div className="popcont">
                        
                        <div className="poplogo">
                            <img src={verlogo} alt="" />
                            <h4>THE EXHIBIT</h4>
                        </div>
                        <h1>ON 13.11.2026</h1>
                        <div className="btns">
                            <Link to="/experience">
                                <Primarybtn style="primarybtn" text="Book Tickets" icon={ticket} />
                            </Link>
                            <button 
                            className="popclose" 
                            onClick={() => setPopupVisible(false)}
                            aria-label="Close"
                        >
                            <img src={close} alt="" />
                        </button>
                        </div>
                    </div>
                </div>
            )}
                <div className="first">

                    <div className="hero">
                        <div className="frame">
                            <div className="imageframe">
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
                                <img src={hier3} alt="" />
                                <img src={hier4} alt="" />
                                <img src={hier2} alt="" />
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
    {ritual.map((item, index) => (
                    
                     <div
                        className={index % 2 === 0 ? "categ" : "categs"}
                        key={item.name}
                        style={{ backgroundImage: item.image ? `url(${item.image})` : 'none' }}
                    >
                    <h1>{item.name}</h1>
                    <Link to={"/rituals"}>
                        <button className={index % 2 === 0 ? "beigearrow" : "blackarrow"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="25" viewBox="0 0 43 25" fill="none">
                            <path
                            d="M28.6667 0C28.6667 1.325 29.98 3.30357 31.3094 4.96429C33.0186 7.10714 35.0611 8.97679 37.4028 10.4036C39.1587 11.4732 41.2872 12.5 43 12.5M43 12.5C41.2872 12.5 39.1569 13.5268 37.4028 14.5964C35.0611 16.025 33.0186 17.8946 31.3094 20.0339C29.98 21.6964 28.6667 23.6786 28.6667 25M43 12.5H9.53674e-07"
                            stroke={index % 2 === 0 ? "#F0E1CE" : "#1E1E1E"}
                            strokeWidth="2.58333"
                            />
                        </svg>
                        </button>
                    </Link>
                    </div>
                ))}
                </div>

                <div className="section4">
                    <Title
                       text={content.home_origins_title?.text}
                        description={content.home_origins_title?.desc} />                     

                    <div ref={originsRef} className="origins-scroll-container">
                        <div className="origins-sticky-wrapper">
                            <motion.div className="origincont" style={isMobile ? {} : { x }}>
                                <div ref={originsRef} className="origins-scroll-container">
                                    <div className="origins-sticky-wrapper">
                                        <motion.div className="origincont" style={isMobile ? {} : { x }}>
                                            {origins.map((item, index) => (
                                                <Origin
                                                    key={item.name}
                                                    style={index % 2 === 0 ? "origin" : "origin2"}
                                                    number={String(index + 1).padStart(2, "0")}
                                                    image={item.image_url}
                                                    title={item.name}
                                                    derivedFrom={item.derived_from}
                                                    description={item.description}
                                                />
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                
                <div className="section5">
                <Title text={content.home_products_title?.text} />
                    
                    <div className="sec5cont">
                
                        <div className="rotat">
                            <h1>Egyptians Made</h1>
                            <RotatingText
                            texts={['Kohl', 'Eyeshadow', 'Serums', 'Facemasks' , 'Lip Balms!']}
                            mainClassName="rotating-text-box"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                            splitBy="characters"
                            auto
                            loop
                            />

                        </div>
                        <div className='flyincont'>
                        <FlyingPosters
                            items={[prod1, prod2, prod3, prod4, prod5, prod6]}
                            planeWidth={320}
                            planeHeight={320}
                            distortion={3}
                            scrollEase={0.01}
                            cameraFov={45}
                            cameraZ={20}
                        />
                        </div>
                        

                    </div>
                        <img className='lotus' src={sec5} alt="" />
                </div>

                <div className="section6">
                    <Title text={content.home_experience_title?.text} />
                   
                    <div className="sec6cont">
                        <img src={formbgb} alt="" />
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
                        <img  src={formbgb} alt="" />

                        


                        
                    </div>
                </div>

                <Footer />
            </main>
        
        </ClickSpark>
        </>
    );
}

export default Home;