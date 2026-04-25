import React from 'react';
import "./step.css"

const Step = (props) => {
    return ( 
        <div 
            className={`step1 ${props.isOpen ? 'step1--open' : ''}`} 
            onClick={props.onClick}
        >
            <div className={props.card}>
                <div className={props.inner}> 
                    <div className={`intern ${props.isOpen ? 'intern--open' : ''}`}>
                        <h5>{props.tit}</h5>
                        <p>{props.desc}</p>
                    </div>
                    <div className="step">
                        <h5>{props.steptext}</h5>
                        <div className="number">
                            <h1>{props.number}</h1>
                        </div>
                    </div>
                </div>                
            </div>               
        </div>
    );
}
 
export default Step;