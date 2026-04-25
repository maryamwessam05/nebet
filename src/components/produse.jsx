import React from 'react';
import './produse.css';

const Produse = (props) => {
    return ( 
        <>
        <div className={props.style}>
            <img src={props.img} alt="" />
            <div className="titleprod">
            <h4 className='prodtitle'>{props.title}</h4>

            </div>
        </div>
        
        </>
     );
}
 
export default Produse;