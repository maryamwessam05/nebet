import React from 'react';
import { NavLink } from 'react-router-dom';
import "./burgerlink.css";

const Burgerlink = (props) => {
    return ( 
        <NavLink to={props.to} end={props.to === "/"} className={({ isActive }) => isActive ? "burgerlink active" : "burgerlink"}>
            {({ isActive }) => (
                <>
                    <div className="burgtxt">
                        <h4>{props.num}</h4>
                        <h1>{props.title}</h1>
                    </div>
                    <button className={isActive ? "burgerbtn active" : "burgerbtn"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="25" viewBox="0 0 43 25" fill="none">
                            <path
                                d="M28.6667 0C28.6667 1.325 29.98 3.30357 31.3094 4.96429C33.0186 7.10714 35.0611 8.97679 37.4028 10.4036C39.1587 11.4732 41.2872 12.5 43 12.5M43 12.5C41.2872 12.5 39.1569 13.5268 37.4028 14.5964C35.0611 16.025 33.0186 17.8946 31.3094 20.0339C29.98 21.6964 28.6667 23.6786 28.6667 25M43 12.5H9.53674e-07"
                                stroke={isActive ? "#0F0F0F" : "#F0E1CE"}
                                strokeWidth="2.58333"
                            />
                        </svg>
                    </button>
                </>
            )}
        </NavLink>
    );
}
 
export default Burgerlink;