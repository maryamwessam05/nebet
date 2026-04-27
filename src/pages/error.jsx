import React, { useState} from 'react';
import ClickSpark from '../cursor/ClickSpark';
import "./error.css"
import Navbar from '../components/navbar';
import Burger from '../components/burgermenu';
import Footer from '../components/footer';
import Title from '../components/title';
import { Link } from 'react-router-dom';
import four from "../assets/4.svg"
import zero from "../assets/0.png"
import Primarybtn from '../components/primarybtn';
import arrower from "../assets/arrower.svg"

const Error = () => {
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

                <div className="errorpage">
                    <Title text="Error" />
                    <div className="errorcont">
                        <div className="errorlinks">
                            <Link className='errorlink' to={"/rituals"} >
                                Rituals
                            </Link>
                            <Link className='errorlink' to={"/rituals"} >
                                Origins
                            </Link>
                            <Link className='errorlink' to={"/rituals"} >
                                Ingredients
                            </Link>
                            <Link className='errorlink' to={"/rituals"} >
                                Experience
                            </Link>
                        </div>

                        <div className="er404">
                            <img src={four} alt="" />
                            <img className='zero' src={zero} alt="" />
                            <img src={four} alt="" />

                        </div>

                        <div className="errorlinks">
                            <Link className='errorlink' to={"/rituals"} >
                                Instagram
                            </Link>
                            <Link className='errorlink' to={"/rituals"} >
                                Facebook
                            </Link>
                            <Link className='errorlink' to={"/rituals"} >
                                Tiktok
                            </Link>
                            <Link className='errorlink' to={"/rituals"} >
                                Location
                            </Link>
                        </div>
                    </div>

                    <div className="ertxt">
                        <h2>Sorry</h2>
                        <h2>Page not found</h2>

                    </div>
                    <Link to={"/"}>
                    <Primarybtn style="primarybtn3" text="HOME" icon={arrower} />
                    
                    </Link>
                </div>

                <Footer />

            </main>

        </ClickSpark>
        </>
     );
}
 
export default Error;