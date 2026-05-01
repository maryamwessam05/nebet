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
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    visitDate: '',
    visitTime: '',
});

const [errors, setErrors] = useState({});
const [successMsg, setSuccessMsg] = useState('');
const [submitError, setSubmitError] = useState('');
const [eventdata , setEventdata] = useState("")

                    
 useEffect(() => {
        const getContent = async () => {
            const res = await supabase.from("webcontent").select("*");
            const map = {};
            res.data.forEach(item => { map[item.identifier] = item; });
            setContent(map);
        };
        getContent();

        const getEventdata = async () => {
            const res = await supabase.from("exhibit").select("*");
            setEventdata(res.data)
        };
        getEventdata();
    }, []);


        const increment = () => setNum(num + 1);
    const decrement = () => setNum(num - 1);

        const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };
    
    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
        if (!formData.visitDate) newErrors.visitDate = 'Date is required';
        if (!formData.visitTime) newErrors.visitTime = 'Please select a time slot';
        if (num <= 0) newErrors.tickets = 'Add at least 1 ticket';
        return newErrors;
    };
    
        const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMsg('');
        setSubmitError('');
    
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    
        const { error } = await supabase.from("booking").insert({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            num_tickets: num,
            visit_date: formData.visitDate,
            visit_time: formData.visitTime,
        });
    
        if (error) {
            setSubmitError('Something went wrong, please try again.');
        } else {
            setSuccessMsg('Your booking is confirmed!');
            setNum(0);
            setFormData({ firstName: '', lastName: '', email: '', visitDate: '', visitTime: '' });
            setErrors({});
        }
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
                        <h3>{eventdata?.[0]?.name || "About NEBET"}</h3>
                        <p>{eventdata?.[0]?.description}</p>
                    </div>
                </div>
                <div className="greycard">
                    <div className="gretxt">
                        <h3>Details</h3>
                        <div className="detpair">
                            <h6>Duration</h6>
                            <p>{eventdata?.[0]?.duration}</p>
                        </div>
                        <div className="detpair">
                            <h6>Format</h6>
                            <p>{eventdata?.[0]?.format}</p>
                        </div>
                        <div className="detpair">
                            <h6>Type</h6>
                            <p>{eventdata?.[0]?.entry_type}</p>
                        </div>
                        <div className="detpair">
                            <h6>Location</h6>
                            <p>{eventdata?.[0]?.location}</p>
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
                            <form onSubmit={handleSubmit}>
                                <div className="row1">
                                    <div className="group">
                                        <label>First Name</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                                        {errors.firstName && <span className="field-error">{errors.firstName}</span>}
                                    </div>
                                    <div className="group">
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                                        {errors.lastName && <span className="field-error">{errors.lastName}</span>}
                                    </div>
                                </div>
                                <div className="row1">
                                    <div className="group">
                                        <label>Email</label>
                                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                                        {errors.email && <span className="field-error">{errors.email}</span>}
                                    </div>
                                    <div className="group">
                                        <label>Number of Tickets</label>
                                        <div className="tick">
                                            <button className='tickbtn' type="button" onClick={decrement}><img src={minus} alt="" /></button>
                                            <h1>{num}</h1>
                                            <button className='tickbtn' type="button" onClick={increment}><img src={plus} alt="" /></button>
                                        </div>
                                        {errors.tickets && <span className="field-error">{errors.tickets}</span>}
                                    </div>
                                </div>
                                <div className="row1">
                                    <div className="group">
                                        <label>Date</label>
                                        <input type="date" name="visitDate" value={formData.visitDate} onChange={handleChange} />
                                        {errors.visitDate && <span className="field-error">{errors.visitDate}</span>}
                                    </div>
                                    <div className="group">
                                        <label>Time Slot</label>
                                        <div className="select-wrapper">
                                            <select name="visitTime" value={formData.visitTime} onChange={handleChange}>
                                                <option value="">Select a time</option>
                                                <option value="09:00:00">9 - 11 AM</option>
                                                <option value="13:00:00">1 - 3 PM</option>
                                                <option value="16:00:00">4 - 6 PM</option>
                                            </select>
                                        </div>
                                        {errors.visitTime && <span className="field-error">{errors.visitTime}</span>}
                                    </div>
                                </div>


                                {submitError && <span className="field-error">{submitError}</span>}
                                {successMsg && <span className="success-msg">{successMsg}</span>}

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