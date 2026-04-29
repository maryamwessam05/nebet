import React, { useState, useRef , useEffect } from 'react';
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
import stp5 from "../assets/stp4.jpg"
import stp6 from "../assets/stp5.jpg"
import stp7 from "../assets/stp6.jpg"
import stp8 from "../assets/stp7.jpg"
import prodcard4 from "../assets/prod04card.png"
import prodcard5 from "../assets/prod05card.png"
import prodcard6 from "../assets/prod06card.png"
import build from "../assets/build.png"
import Step from '../components/step';
import { supabase } from "../supabase";
import Preloader from './preloader';



const Rituals = () => {
    const [activeTab, setActiveTab] = useState('eye');
    const [menuOpen, setMenuOpen] = useState(false);
const [openSteps, setOpenSteps] = useState(new Set());
    const [content, setContent] = useState({});
    const preloaderRef = useRef(null);
    const [visible, setVisible] = useState(true);
      ;

     useEffect(() => {
            const getContent = async () => {
                const res = await supabase.from("webcontent").select("*");
                const map = {};
                res.data.forEach(item => { map[item.identifier] = item; });
                setContent(map);
            };
            getContent();
        }, []);


    const demoItems = [
    { link: '#', text: '01.  Prepare the eyes with natural oils', image: stp1 },
    { link: '#', text: '02. Apply kohl along the lash line', image: stp2 },
    { link: '#', text: '03. Add mineral pigments for depth', image: stp3 },
    { link: '#', text: '04. Impress with your eyes', image: stp4 }
    ];
    const demoItems2 = [
    { link: '#', text: '01.  Cleanse using natural oils', image: stp5 },
    { link: '#', text: '02. Apply milk & honey blend', image: stp6 },
    { link: '#', text: '03. Seal with protective oils', image: stp7 },
    { link: '#', text: '04. Impress with glowing skin', image: stp8 }
    ];
    const handleStepClick = (step) => {
    setOpenSteps(prev => new Set([...prev, step]));
};

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
                
                <div className="firstrit">
                    <div style={{ width: '100%' , height: "70vh"}}>
                    <ChromaCard item={{ image: rithero }} />
                    </div>
                    <div className="ritherotxt">
                        <h1>{content.rituals_hero_title?.text}</h1>
                        <p>{content.rituals_hero_subtitle?.text}</p>
                    </div>
                </div>

                <div className="ritcat">
                    <div className="categr">
                                    <h1>Makeup Rituals</h1>
                                    <p>Pigments of power, protection, and identity.</p>
                                    <button className='categrbtn'>
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
                    <button 
                        className={activeTab === 'eye' ? 'activebtn' : 'unactivebtn'}
                        onClick={() => setActiveTab('eye')}
                    >
                        Eye
                    </button>
                    <button 
                        className={activeTab === 'skincare' ? 'activebtn' : 'unactivebtn'}
                        onClick={() => setActiveTab('skincare')}
                    >
                        Skincare
                    </button>
                </div>

                {activeTab === 'eye' && (
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
                        <div style={{ height: 'auto', position: 'relative', width: '100%' }}>
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
                )}

                {activeTab === 'skincare' && (
                    <div className="section3r">
                        <div className="ritual">
                            <div className="ritualtit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="113" viewBox="0 0 100 113" fill="none" style={{ overflow: "visible" }}>
                                <path d="M43.99 0H53.456C53.9067 0.169806 54.5879 0.239979 55.0749 0.329729C55.7213 0.452321 56.3597 0.614251 56.9866 0.81462C61.2651 2.21877 64.7989 5.28317 66.7931 9.31836C67.3978 10.5365 67.8447 11.8263 68.1245 13.1569C68.2281 13.6531 68.3208 14.4412 68.4385 14.8771C69.6702 15.0865 70.5417 15.2244 71.7419 15.6028C75.1635 16.7092 78.1376 18.8867 80.2251 21.8132C82.2295 24.6168 83.3061 27.977 83.3034 31.4229C85.451 31.4886 87.6106 31.4209 89.7723 31.44C90.9855 31.4508 92.3522 31.5431 92.529 33.0995C92.6217 33.9146 92.5773 34.8053 92.5756 35.6307L92.5697 39.8682L92.5724 47.4604C92.5724 48.8702 92.5984 50.3764 92.5567 51.7799C93.5589 51.7928 94.5617 51.7979 95.5645 51.7954C97.0884 51.7919 99.8793 51.376 99.9563 53.604C100.016 55.3249 99.9856 57.0685 99.9834 58.7921L99.9818 68.6238L99.9823 82.0083C99.9823 84.599 100.054 87.6082 99.9091 90.1647C99.5251 96.0047 96.853 101.458 92.4715 105.341C89.6942 107.813 86.348 109.56 82.7307 110.426C81.9535 110.615 80.2652 110.78 79.654 111H20.4727C19.8114 110.781 18.0204 110.6 17.1026 110.375C13.1121 109.397 9.46446 107.349 6.55283 104.452C3.56191 101.444 1.48385 97.6513 0.558846 93.5121C-0.0762812 90.7468 0.00192359 87.7675 0.00414716 84.9432L0.00485222 77.9742L0.0011643 54.7797C0.00691304 51.5723 1.1002 51.7839 3.88569 51.7904L7.4075 51.8C7.34806 50.7663 7.42469 49.4318 7.42572 48.3727L7.42881 39.825L7.42111 35.7291C7.40522 31.3201 7.50739 31.4382 11.7899 31.441L16.6786 31.4439C16.6382 30.34 16.9401 28.549 17.2324 27.4893C18.7322 22.0422 23.2159 17.9313 28.7752 16.9062C30.0701 16.6683 31.3021 16.6873 32.5955 16.5703C37.0677 16.1699 41.0281 12.7247 42.2085 8.42017C42.7395 6.47377 42.5665 4.43984 42.6027 2.44741C42.6285 1.02973 42.7531 0.685989 43.99 0ZM88.7213 103.631C83.6542 103.557 78.4039 103.622 73.3222 103.622L43.9217 103.623L24.5579 103.622H18.2391C17.1504 103.622 15.8796 103.589 14.8139 103.632C14.8663 102.979 14.766 100.27 14.9075 99.9558C14.982 99.9238 14.9899 99.9092 15.0646 99.9054C18.3827 99.8371 21.8983 99.8902 25.2319 99.8902L44.0855 99.8913L92.4688 99.8973C94.2525 97.4594 95.3085 95.2481 95.9153 92.2541C96.3243 90.2379 96.2809 88.4688 96.2793 86.4299L96.2782 81.617L96.2776 64.2196L96.2755 58.6495C96.2744 57.6962 96.2359 56.4528 96.2912 55.5347L31.5331 55.5201H12.5604L6.74693 55.5222C5.97118 55.5233 4.46105 55.5753 3.75374 55.5125C3.67569 55.9683 3.71556 58.0186 3.71675 58.6056L3.72169 65.1014L3.7187 81.6652L3.71865 86.3469C3.71935 88.3014 3.69115 89.9268 4.01455 91.8753C4.48654 94.5934 5.55944 97.1722 7.15504 99.423C9.99015 103.442 14.3091 106.17 19.159 107.003C21.256 107.347 23.2529 107.301 25.3653 107.3L31.3362 107.299L52.8367 107.298L70.341 107.297L75.4314 107.3C81.0657 107.3 83.965 106.841 88.7213 103.631ZM88.8411 37.1948C88.8547 36.5309 88.8585 35.8417 88.884 35.1804C82.5294 35.0955 76.0236 35.1621 69.662 35.162L33.9306 35.1622L18.4301 35.1612L13.6937 35.1661C13.0825 35.167 11.8316 35.2031 11.2621 35.1456C11.0177 35.3866 11.1545 38.2605 11.1244 38.8213C15.3816 38.9228 19.8088 38.8233 24.0857 38.8498L24.0818 42.5758L15.2659 42.5802L12.6985 42.5828C12.2773 42.5834 11.5601 42.6089 11.1672 42.544C11.1004 43.6566 11.1409 44.8824 11.136 46.0123L69.1007 39.4414C75.6565 38.6747 82.3011 38.0054 88.8411 37.1948ZM11.1832 49.7586C11.1125 50.4862 11.1594 51.0927 11.1161 51.7877L24.7014 51.7969L67.1668 51.7964L81.2853 51.7966C83.7795 51.7967 86.386 51.7579 88.8737 51.8079C88.7988 50.9399 88.8634 49.0769 88.8786 48.1374C86.2737 48.1187 83.6689 48.1136 81.0635 48.1221C79.3709 48.1223 77.5861 48.0937 75.8994 48.1274C75.9374 46.9274 75.9157 45.6273 75.9108 44.4201C79.6177 44.2718 83.4297 44.4763 87.1447 44.3934C87.6974 44.3811 88.3129 44.3818 88.865 44.4057C88.8438 43.8966 88.9469 41.2224 88.8043 40.9973C88.622 40.9612 88.6052 40.9716 88.4252 40.9902C83.5821 41.6173 78.5487 42.118 73.6818 42.675L41.9156 46.285L21.7107 48.5812L14.9464 49.3499C13.7294 49.4875 12.3887 49.6712 11.1832 49.7586ZM46.3164 3.68206C46.3105 4.95181 46.315 6.24467 46.1531 7.50697C45.723 10.7229 44.2436 13.7073 41.9443 15.9979C39.5081 18.4407 36.2975 19.9607 32.8629 20.2971C31.413 20.4309 30.2663 20.334 28.7707 20.7165C25.0933 21.6571 22.1872 24.3872 20.9562 27.9697C20.5634 29.1129 20.455 30.2452 20.3672 31.4289C25.717 31.5209 31.2737 31.4462 36.6362 31.4462L66.4205 31.4436L66.3961 31.3945C66.2665 31.1271 66.1667 30.8473 66.0636 30.5688C65.3461 28.6255 63.6871 27.0509 61.7385 26.3692C61.3318 26.228 60.9131 26.1237 60.4879 26.0574C59.5909 25.9166 58.1163 25.941 57.6618 24.9835C57.2795 24.1784 57.4243 23.2411 57.1037 22.3254C56.646 20.9233 55.6427 19.7646 54.3199 19.1107C53.5368 18.723 52.7032 18.565 51.835 18.533C51.8388 17.3391 51.874 15.9908 51.8436 14.809C56.5544 15.0652 59.7921 17.6727 60.9022 22.2785C61.5558 22.464 62.3991 22.6649 63.013 22.8901C65.5305 23.7996 67.6348 25.5869 68.9386 27.9233C69.6181 29.1355 69.873 30.1184 70.2 31.4317C73.3282 31.4758 76.5144 31.391 79.6263 31.4514L79.6182 31.3888C79.4994 30.4477 79.545 29.9213 79.3432 28.8875C78.7337 25.8647 77.0595 23.1605 74.6249 21.2656C72.8623 19.8951 70.7744 18.9672 68.5481 18.6731C67.5475 18.5409 66.5648 18.6802 65.6536 18.1736C65.0777 17.8535 64.889 17.2682 64.8239 16.6414C64.7116 15.5661 64.6742 14.535 64.3998 13.4721C63.6747 10.6659 62.059 8.20235 59.791 6.44591C56.3694 3.79616 53.1941 3.61618 49.1054 3.71892C48.5793 3.73215 46.7549 3.75065 46.3164 3.68206Z" fill="#F0E1CE"/>

                                <g style={{
                                    animation: "liftCap 1600ms ease-in-out infinite",
                                    transformBox: "fill-box",
                                    transformOrigin: "bottom right",
                                }}>
                                    <path d="M23 2H77C88.598 2 98 11.402 98 23V56H2V23C2 11.402 11.402 2 23 2Z"
                                    fill="#1E1E1E" stroke="#F0E1CE" strokeWidth="4" />
                                </g>

                                <style>{`
                                    @keyframes liftCap {
                                    0%   { transform: translateY(0px); }
                                    30%  { transform: translateY(-70px); }
                                    70%  { transform: translateY(-70px); }
                                    100% { transform: translateY(0px); }
                                    }
                                `}</style>
                                </svg>
                                <h1 className='ritualhead'>Skin Renewal Ritual</h1>
                            </div>
                        </div>
                                <div style={{ height: 'auto', position: 'relative', width: '100%' }}>
                                    <FlowingMenu items={demoItems2}
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
                                    <Produse style={"prod1"} img={prodcard4} title={"Milk"}/>
                                    <Produse style={"prod2"} img={prodcard5} title={"Honey"}/>
                                    <Produse style={"prod3"} img={prodcard6} title={"Castor Oil"}/>
                                </div>
                                <h2>Meaning</h2>
                                <p>Protection from sunlight and spiritual defense</p>
                            </div>
                        )}
                </div>

                <div className="build">
                    <div className="buildtxt">
                        <h2>{content.rituals_build_title?.text}</h2>
                        <p>{content.rituals_build_title?.desc}</p>
                        <img src={build} alt="" />
                    </div>
                    <div className="buildsteps">
                        <Step 
                            card="step1grey" inner="innergrey" step="stepb" 
                            tit={content.rituals_step1?.text} desc={content.rituals_step1?.desc}
                            number="01" steptext="Step 1"
                            isOpen={openSteps.has(1)} onClick={() => handleStepClick(1)}
                        />           
                        <Step 
                            card="step1white" inner="innerwhite" step="stepw" 
                            tit={content.rituals_step2?.text} desc={content.rituals_step2?.desc}
                            number="02" steptext="Step 2"
                            isOpen={openSteps.has(2)} onClick={() => handleStepClick(2)}

                        />              
                        <Step 
                            card="step1grey" inner="innergrey" step="stepb" 
                            tit="Enhance" desc="Apply pigments and finishing elements." 
                            number="03" steptext="Step 3"
                            isOpen={openSteps.has(3)} onClick={() => handleStepClick(3)}

                        />              
                    </div>
                </div>



                <Footer />
            </main>

        </ClickSpark>
        
            
        </>
     );
}
 
export default Rituals;