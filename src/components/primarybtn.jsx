import React from 'react';
import "./primarybtn.css";

const Primarybtn = (props) => {
    return (
        <button className={props.style} onClick={props.onClick}>
            <img src={props.icon} alt="" />
            <h3>{props.text}</h3>
        </button>
    );
}
 
export default Primarybtn;