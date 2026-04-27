import React from 'react';
import "./ingred.css"

const Ingred = (props) => {
    return ( 
        <>
            <div className={props.style}>
                <div className="tags">
                    <div className={props.tag1style}><h5>{props.tag1}</h5></div>
                    <div className={props.tag1style}><h5>{props.tag2}</h5></div>

                </div>
                <div  className='ingredimg'>
                    <img src={props.img} alt="" />

                </div>
                <div className={props.prodstyle}>
                    {props.name}
                </div>
                <p className={props.descstyle}>{props.desc}</p>
            </div>
        </>
     );
}
 
export default Ingred;