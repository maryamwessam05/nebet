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
import FlowingMenu from '../flowingmenu/FlowingMenu';
import stp1 from "../assets/stp1.jpg"
import stp2 from "../assets/stp2.jpg"
import stp3 from "../assets/stp3.jpg"
import stp4 from "../assets/img06.png"
import Produse from '../components/produse';
import prodcard1 from "../assets/prod01card.png"
import prodcard2 from "../assets/prod02card.png"
import prodcard3 from "../assets/prod03card.png"

const Rituals = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const demoItems = [
    { link: '#', text: '01.  Prepare the eyes with natural oils', image: stp1 },
    { link: '#', text: '02. Apply kohl along the lash line', image: stp2 },
    { link: '#', text: '03. Add mineral pigments for depth', image: stp3 },
    { link: '#', text: '04. Impress with your eyes', image: stp4 }
    ];

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

                <div className="ritcat">
                    <div className="categr">
                                    <h1>Makeup Rituals</h1>
                                    <p>Pigments of power, protection, and identity.</p>
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
                    <div className="categsr">
                                    <h1>Skincare Rituals</h1>
                                    <p>Routines rooted in nature, healing, and renewal.</p>
                                    <button className="blackarrowr">
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

            <div className="togglesection">
                <div className="toggle">
                    <button className='activebtn'>Eye</button>
                    <button className='unactivebtn'>Skincare</button>
                </div>
                <div className="section3r">
                    <div className="ritual">
                        <div className="ritualtit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="120"
                                height="94"
                                viewBox="0 0 120 94"
                                fill="none"
                                style={{
                                animation: "blink 3s ease-in-out infinite",
                                transformOrigin: "60px 47px",
                                }}
                            >
                                <style>{`
                                @keyframes blink {
                                    0%, 40%, 60%, 100% { transform: scaleY(1); }
                                    50% { transform: scaleY(0.08); }
                                }
                                `}</style>
                                <path d="M58.6919 48.0607C66.4019 47.3454 73.2255 53.034 73.9098 60.748C74.5941 68.4619 68.8785 75.2625 61.1615 75.9151C53.4887 76.564 46.7361 70.8876 46.0553 63.2179C45.3763 55.548 51.0245 48.772 58.6919 48.0607Z" fill="#F0E1CE"/>
                                <path d="M61.0545 0.0101498C61.542 -0.0175061 62.0969 0.00554082 62.5631 0.15233C63.3077 0.387582 63.9406 0.861099 64.2934 1.56934C64.8891 2.76421 64.9334 19.0462 64.4529 20.4703C64.1232 21.4445 63.2847 21.9065 62.4124 22.3307C61.8682 22.358 61.2672 22.3539 60.746 22.1799C60.051 21.9474 59.4377 21.5106 59.1132 20.8382C58.5406 19.6485 58.4715 3.2567 58.9803 1.87125C59.3437 0.875814 60.1503 0.447679 61.0545 0.0101498Z" fill="#F0E1CE"/>
                                <path d="M83.0086 5.69426C86.0437 5.39252 87.508 7.16657 86.5028 10.1257C85.0296 14.4594 83.7727 18.9646 82.0176 23.1883C81.8439 23.6041 80.961 24.0927 80.5834 24.3061C77.7894 24.828 76.139 22.8955 77.0006 20.1985C78.4241 15.7424 79.8335 11.0684 81.6169 6.74606C81.7286 6.47784 82.7303 5.86622 83.0086 5.69426Z" fill="#F0E1CE"/>
                                <path d="M38.6421 5.66717C39.135 5.63632 39.7058 5.61416 40.1898 5.72372C40.8812 5.88008 41.4591 6.32381 41.8385 6.91735C42.8171 8.44817 46.9726 20.9116 46.6003 22.3337C46.3131 23.4318 45.4196 23.9259 44.4782 24.4145C44.0545 24.4494 43.3879 24.415 42.9784 24.3069C42.2728 24.1164 41.6754 23.6436 41.3297 22.9998C40.3316 21.1248 36.1779 9.20693 36.6761 7.65519C37.0076 6.61686 37.7185 6.15646 38.6421 5.66717Z" fill="#F0E1CE"/>
                                <path d="M101.296 16.5159C107.176 17.3789 102.512 23.4585 100.769 26.0609C99.4749 27.9927 98.7144 29.9295 96.3494 30.5789C91.1906 29.6127 94.1795 24.8869 96.0569 22.2865C97.555 20.2131 98.6665 17.0931 101.296 16.5159Z" fill="#F0E1CE"/>
                                <path d="M21.8433 16.5118C23.2208 16.6821 24.3748 17.286 24.9563 18.6384C26.3515 21.891 33.7832 28.4314 27.4932 30.523C27.2202 30.5016 26.0466 30.3964 25.7842 30.15C23.2137 27.5365 20.8239 23.3814 19.1894 20.0609C18.3668 18.3902 20.4038 16.8913 21.8433 16.5118Z" fill="#F0E1CE"/>
                                <path d="M58.8838 33.5645C67.3096 33.0503 79.5737 35.6601 87.5479 38.8818L87.5566 38.8848L87.5645 38.8887C97.5668 42.8454 106.426 49.2328 113.341 57.4736V57.4727C114.64 59.0321 116.028 60.7921 116.902 62.3613C116.35 63.3287 115.458 64.5997 114.373 65.9785C113.13 67.5578 111.786 69.0922 110.785 70.1582L110.379 70.5859C97.5612 83.829 79.7916 90.7071 61.4072 91.1094H61.4014C51.4588 91.3498 41.5708 89.5829 32.3281 85.9141L32.3184 85.9102L31.3779 85.5332C21.7036 81.5642 13.1281 75.3084 6.38965 67.2979C5.0767 65.7252 3.66887 63.9422 2.78516 62.3545C3.28212 61.4875 4.06699 60.3495 5.02539 59.1055C6.31778 57.4279 7.72904 55.8031 8.6543 54.832C22.2184 40.5997 39.3027 34.2366 58.8174 33.5684L58.8838 33.5645ZM87.5791 59.3145C85.8966 43.9864 72.0976 32.9307 56.7725 34.6289C41.4673 36.3246 30.4292 50.0973 32.1094 65.4033C33.7899 80.7096 47.5548 91.7608 62.8623 90.0957C78.1911 88.428 89.2614 74.6419 87.5791 59.3145ZM36.291 38.2207C26.3128 41.7501 17.6526 46.5085 10.084 54.3857V54.3867C9.38207 55.1176 8.45845 56.1178 7.5918 57.1836C6.8576 58.0865 6.07492 59.1428 5.52246 60.1826L5.30078 60.627L5.29785 60.6328C5.1563 60.9384 5.03142 61.2469 4.9209 61.5557L4.58887 62.4844L4.97949 63.3896C6.39781 66.6753 9.49699 70.0509 12.6426 72.8799C15.8562 75.77 19.419 78.3527 22.1123 80.0303L22.1348 80.0449L22.1592 80.0586C27.4733 83.2085 31.2507 84.838 37.0107 86.8301L39.6562 82.7627C33.963 76.6601 30.8846 69.7028 31.1748 61.4453L31.1758 61.4404C31.3143 57.2474 32.3704 53.1349 34.2705 49.3945C35.3268 47.3262 36.5676 45.5259 38.0898 43.6553C38.1098 43.631 38.1602 43.5762 38.2871 43.4404C38.3918 43.3285 38.5528 43.1569 38.7031 42.9844C38.8464 42.8198 39.0549 42.5713 39.2354 42.2803C39.3276 42.1315 39.4444 41.9207 39.54 41.6631C39.6321 41.4151 39.7453 41.0144 39.7207 40.5215L39.6592 39.3027L38.6611 38.6016L38.5625 38.5322L37.5078 37.79L36.291 38.2207ZM80.2422 42.1367C80.6241 42.57 80.9769 42.9666 81.3223 43.3721L81.3242 43.374C91.5388 55.3426 90.7654 71.2852 80.0752 82.7266L82.7021 86.8018C88.2127 84.9398 92.9431 82.9336 98.0186 79.7598L98.0303 79.752L98.042 79.7451C100.631 78.0866 104.107 75.533 107.247 72.6875C110.314 69.908 113.359 66.5868 114.722 63.3721L115.127 62.415L114.735 61.4531C113.764 59.069 112.153 57.1459 110.685 55.541L110.066 54.8721C104.05 48.4064 96.46 43.4926 88.4473 40.127C87.2286 39.6151 84.2022 38.3951 82.6738 38.0459L75.1133 36.3184L80.2422 42.1367Z" fill="#F0E1CE" stroke="#F0E1CE" strokeWidth="5"/>
                            </svg>
                            <h1 className='ritualhead'>Eye Ritual</h1>
                        </div>
                    </div>
                    <div style={{ height: 'auto', position: 'relative' , width: '100%'}}>
                        <FlowingMenu items={demoItems}
                        speed={15}
                        textColor="#F0E1CE"
                        bgColor="#1E1E1E"
                        marqueeBgColor="#F0E1CE"
                        marqueeTextColor="#1E1E1E"
                        borderColor="#F0E1CE"
                        />
                    </div>
                    <h2>Products Used</h2>
                    <div className="productsused">
                        <Produse style={"prod1"} img={prodcard1} title={"Kohl"}/>
                        <Produse style={"prod2"} img={prodcard2} title={"Malachite"}/>
                        <Produse style={"prod3"} img={prodcard3} title={"Charcoal"}/>
                    </div>
                    <h2>Meaning</h2>
                     <p>Protection from sunlight and spiritual defense</p>                       
                </div>
            </div>



                <Footer />
            </main>

        </ClickSpark>
        
            
        </>
     );
}
 
export default Rituals;