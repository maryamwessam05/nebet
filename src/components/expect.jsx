import React from 'react';
import "./expect.css"

const Expect = (props) => {
    return ( 
        <>
        <div className={props.style}>
            <div className={props.stylexp}>
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
            </div>
            <img src={props.img} alt="" />
        </div>
        </>
     );
}
 
export default Expect;