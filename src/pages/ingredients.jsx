import React, { useState , useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import Burger from '../components/burgermenu';
import Primarybtn from '../components/primarybtn';
import Footer from '../components/footer';
import ClickSpark from '../cursor/ClickSpark';
import Navbar from '../components/navbar';
import TiltedCard from '../tiltedcard/TiltedCard';
import beeswax from "../assets/beeswax.png"
import "./origins.css"
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from '../blurtext/BlurText';
import "./ingredients.css"
import lotus from "../assets/lotus.png"
import kohl from "../assets/charcoal.png"
import ochre from "../assets/ochre.png"
import honey from "../assets/honey.png"
import Title from '../components/title';
import kohlprod from "../assets/kohlprod.png"
import Ingred from '../components/ingred';
import ScrollVelocity from '../rollingtext/ScrollVelocity';
import {supabase} from "../supabase"





const Ingredients = () => {
            const [menuOpen, setMenuOpen] = useState(false);
            const [product, setProduct] = useState([ ]); 
            const [content, setContent] = useState({});
            
    useEffect(()=> {
        const getProducts = async() => {
            const res = await supabase.from("product").select(`*`);
            setProduct(res.data);
        }
        getProducts();

    },[])
     useEffect(() => {
            const getContent = async () => {
                const res = await supabase.from("webcontent").select("*");
                const map = {};
                res.data.forEach(item => { map[item.identifier] = item; });
                setContent(map);
            };
            getContent();
        }, []);
    const originsRef = useRef(null);

             const { scrollYProgress } = useScroll({
        target: originsRef,
        offset: ["start start", "end end"],
    });
    const ITEM_WIDTH = 270;
const GAP = 45;
const PADDING_LEFT = 50;
const ITEMS_COUNT = 8;
const totalDistance = (ITEMS_COUNT - 1) * (ITEM_WIDTH + GAP) - PADDING_LEFT;
const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);
    return ( 
        <>
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
                <div className="ingredfirst">

                <div className="heroingredients">
                <div className="ingherotxt">
                    <BlurText text={content.ingredients_hero_the?.text} delay={200} animateBy="words" direction="top" className="originsub" />
                    <BlurText text={content.ingredients_hero_title?.text} delay={400} animateBy="Origins" direction="top" className="originstit" />
                </div>
                <div className="cardsel">
                    <TiltedCard
                    imageSrc={honey}
                    containerHeight="300px"
                    containerWidth="220px"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    captionText="Honey"
                    />
                    <TiltedCard
                    imageSrc={lotus}
                    containerHeight="357px"
                    containerWidth="240px"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    captionText="Blue Lotus"
                    />
                    <TiltedCard
                    imageSrc={kohl}
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    captionText="Charcoal"
                    />
                    <TiltedCard
                    imageSrc={ochre}
                    containerHeight="357px"
                    containerWidth="240px"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    captionText="Ochre"
                    />
                    <TiltedCard
                    imageSrc={beeswax}
                    containerHeight="300px"
                    containerWidth="220px"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    captionText="Beeswax"
                    />

                </div>
                </div>
                    
                </div>

                <div className="ingredients">
                    <Title text={content.ingredients_section_title?.text} />
                    

                    <div ref={originsRef} className="ingred-scroll-container">
                        <div className="ingred-sticky-wrapper">
                            <motion.div className="origincont" style={{ x }}>
                                <div className="ingredcardlist">
                                {product && product.map((item, index) => {
                                    const isLight = index % 2 === 0;
                                    return (
                                    <Ingred
                                        key={item.id}
                                        style={isLight ? "light" : "dark"}
                                        tag1style={isLight ? "tagdark" : "taglight"}
                                        img={item.image_url}
                                        prodstyle={isLight ? "darktxt" : "lighttxt"}
                                        name={item.name}
                                        descstyle={isLight ? "darkp" : "lightp"}
                                        desc={item.description}
                                        tag1={item.tag_1}
                                        tag2={item.tag_2}
                                    />
                                    );
                                })}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="featuredsec">
                    <div className="featitle">
                        <ScrollVelocity
                        texts={['KOHL']} 
                        velocity={100}
                        className="featitle"
                        numCopies={6}
                        damping={50}
                        stiffness={400}
                        />

                    </div>

                    <div className="content1">
                        <p>{content.ingredients_kohl_body?.text}</p>
                        <img className='kohlprod' src={kohlprod} alt="" />
                        <div className="since">
                            <span>{content.ingredients_kohl_since?.text}</span>
                            <h1>{content.ingredients_kohl_date?.text}</h1>
                            <Primarybtn text={content.ingredients_kohl_btn?.text} style="primarybtn" />
                        </div>
                    </div>
                </div>
                <Footer />

            </main>

        </ClickSpark>
        </>
     );
}
 
export default Ingredients;