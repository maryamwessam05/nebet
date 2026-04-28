import React from 'react';
import "./preloader.css"
import MagicRings from '../componentpreloader/MagicRings';
import verlogo from "../assets/verlogo.svg"

const Preloader = () => {
    return ( 
        <>
        <div className="preloader">
            <div className="preloadercont">

            <MagicRings />
            </div>
            <img src={verlogo} alt="" />

        </div>
        </>
     );
}
 
export default Preloader;