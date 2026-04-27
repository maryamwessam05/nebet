import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Burger from '../components/burgermenu';
import Primarybtn from '../components/primarybtn';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ClickSpark from '../cursor/ClickSpark';
import AnimatedSVG from '../components/originshero';
import "./origins.css"
import BlurText from '../blurtext/BlurText';
import lotus from "../assets/lorus.png"
import eyeliner from "../assets/eyeliner.png"
import kohl from "../assets/Kohl.jpg"
import facemask from "../assets/facemask1.jpg"
import serums from "../assets/stp6.jpg"
import milkhoney from "../assets/milkhoney.jpg"
import oils from "../assets/oils.jpg"
import eyeshadow from "../assets/eyeshadow.jpg"
import malachite from "../assets/malachite2.jpg"
import lipbalm from "../assets/lipbalm.jpg"
import beeswax from "../assets/beeswax.png"
import old1 from "../assets/era01.png"
import old2 from "../assets/era02.png"
import old3 from "../assets/era03.png"
import ScrollReveal from "../componentsec2txt/ScrollReveal";


const products = [
  {
    now: {
      title: "Waterproof Eyeliner",
      image: eyeliner,
    },
    before: {
      title: "Kohl (Mesdemet)",
      image: kohl,
    },
  },
  {
    now: {
      title: "Face Masks",
      image: facemask, 
    },
    before: {
      title: "Milk and Honey",
      image: milkhoney, 
    },
  },
  {
    now: {
      title: "Serums",
      image: serums,
    },
    before: {
      title: "Natural Oils",
      image: oils,
    },
  },
  {
    now: {
      title: "Eyeshadow",
      image: eyeshadow,
    },
    before: {
      title: "Malachite",
      image: malachite,
    },
  },
  {
    now: {
      title: "Lip Balm",
      image: lipbalm,
    },
    before: {
      title: "Beeswax",
      image: beeswax,
    },
  },
  
];
const timelineData = [
  {
    date: "3000BC",
    image: old1,
    description:
      "Beauty was practiced through natural elements like oils, minerals, and honey, combining care, protection, and symbolism. Practices like applying kohl, using oil infusions, and performing cleansing rituals were not only aesthetic but also protective and symbolic, forming the foundation of what we now recognize as beauty routines.",
  },
  {
    date: "1950s",
    image: old2,
    description:
      "Beauty became more standardized and widely accessible through the rise of commercial cosmetics. Iconic looks emphasized polished femininity, with defined eyeliner, bold lips, and structured routines, shifting beauty into a cultural and social expression influenced by media and industry.", 
  },
  {
    date: "2020s",
    image: old3,
    description:
      "Beauty is now a personalized and inclusive experience that blends tradition with innovation. Skincare and makeup emphasize individuality, wellness, and self-expression, with a renewed interest in natural ingredients and ancient practices reinterpreted through modern science and digital culture.", 
  },
];
const Origins = () => {
    
  const [menuOpen, setMenuOpen] = useState(false);

  const [productIndex, setProductIndex] = useState(0);

  const [showOrigin, setShowOrigin] = useState(false);
  const [imgFading, setImgFading] = useState(false); 
const [cardFading, setCardFading] = useState(false);
const [activeEra, setActiveEra] = useState(0);
const [eraFading, setEraFading] = useState(false);
const [fontsReady, setFontsReady] = useState(false);

useEffect(() => {
  document.fonts.ready.then(() => {
    setFontsReady(true);
  });
}, []);

  const currentProduct = products[productIndex];

  const handleSeeOrigin = () => {
  setCardFading(true); 
  setImgFading(true);
  
  setTimeout(() => {
    setShowOrigin(prev => !prev);  // only toggle ONCE at the midpoint
    setCardFading(false);    
    setImgFading(false);
  }, 400);
};

  const handleNextProduct = () => {
    setProductIndex(prev => (prev + 1) % products.length);
    setShowOrigin(false); 
  };
  const handleEraChange = (index) => {
  if (index === activeEra) return;
  setEraFading(true);
  setTimeout(() => {
    setActiveEra(index);
    setEraFading(false);
  }, 350);
};

  
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
                <BlurText text="The" delay={200} animateBy="words" direction="top" className="originsub" />
                <BlurText text="Origins" delay={300} animateBy="Origins" direction="top" className="originstit" />
                <BlurText text="Beauty" delay={200} animateBy="words" direction="top" className="originsub" />
              </div>
              <div className="anim">
                <AnimatedSVG duration={7} />
              </div>
            </div>
          </div>

          <div className="section2orig">
            <div className="sec2title">
              <BlurText text="BEFORE IT WAS BEAUTY " delay={200} animateBy="words" direction="top" className="title1" />
              <BlurText text="IT WAS A RITUAL" delay={300} animateBy="words" direction="top" className="title2" />
              <p className='sec2des'>Long before serums, foundations, and formulas, beauty was practiced through nature, belief, and ritual in Ancient Egypt.</p>
            </div>

            <div className="origswitch">
              <img className='lot1' src={lotus} alt="" />
              <img className='lot2' src={lotus} alt="" />

              <div
                className={`origswcont ${cardFading ? "fade-out" : "fade-in"}`}
                style={{
                    flexDirection: showOrigin ? "row-reverse" : "row",
                }}
                >
                <div
                  className="changcard"
                  style={{
                    backgroundColor: showOrigin ? "#1e1e1e" : "",   
                    color: showOrigin ? "#F0E1CE" : "",             
                  }}
                >
                  <h4 style={{ color: showOrigin ? "#F0E1CE" : "" }}>
                    {showOrigin ? "BEFORE" : "NOW"}
                  </h4>

                  <div className="deet" style={{ borderColor: showOrigin ? "#F0E1CE" : "#1e1e1e" }}>
                    <h5 style={{ color: showOrigin ? "#F0E1CE" : "" }}>
                      {showOrigin
                        ? currentProduct.before.title
                        : currentProduct.now.title}
                    </h5>
                    <Primarybtn
                      style="primarybtn"
                      text={showOrigin ? "See the Now" : "See the Origin"}
                      onClick={handleSeeOrigin}
                    />
                  </div>
                </div>

                <div className="changimg">
                  <img className={imgFading ? "fade-out" : "fade-in"}
                    src={showOrigin
                      ? currentProduct.before.image
                      : currentProduct.now.image}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <Primarybtn
              style="primarybtn"
              text="Next Makeup Product"
              onClick={handleNextProduct}
            />
          </div>

          <div className="timeline">
            <div className="timelinecont">
                <div className="timelinetxt">
                <h1>The Evolution of Beauty</h1>
                <div className="line">
                    <div
                        className="point"
                        style={{
                        position: "absolute",
                        left:
                            activeEra === 0 ? "0%" :
                            activeEra === 1 ? "50%" :
                            "100%",
                        transform: "translateX(-50%)",
                        transition: "left 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                    ></div>
                    <div className="linet"></div>
                    </div>
                <div className="dates">
                    {timelineData.map((era, index) => (
                    <h1
                        key={era.date}
                        className={index !== activeEra ? "inactivedate" : ""}
                        onClick={() => handleEraChange(index)}
                        style={{ cursor: "pointer" }}
                    >
                        {era.date}
                    </h1>
                    ))}
                </div>
                </div>

                <div className={`timelineimg ${eraFading ? "fade-out" : "fade-in"}`}>
                <img src={timelineData[activeEra].image} alt={timelineData[activeEra].date} />
                <p>{timelineData[activeEra].description}</p>
                </div>
            </div>
            </div>

        <div className="textcont">
                    {fontsReady && (
                    <ScrollReveal
                    key="scroll-reveal-ready"
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={0}
                    blurStrength={4}
                    wordAnimationEnd="bottom 50%"
                    >
                    While modern beauty has evolved in form, its essence remains unchanged. The ingredients, intentions, and rituals developed in Ancient Egypt continue to shape how we define and practice beauty today.
                    </ScrollReveal>
                )}
                    </div>

          <Footer />
        </main>
      </ClickSpark>
    </>
  );
}

export default Origins;