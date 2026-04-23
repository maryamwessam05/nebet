import React from 'react';
import "./origin.css";

const Origin = (props) => {
    return ( 
        <>
        <div className={props.style}>
            <h1>{props.number}</h1>
            <div className="origcontimg">
            <img src={props.image} alt="" />

            </div>
            <div className="origtext">
                <h3>{props.title}</h3>
                <h5>Derived from <br /> <span>{props.derivedFrom}</span></h5>
                <p>{props.description}</p>

            </div>
        </div>
        
        </>
     );
}
 
export default Origin;