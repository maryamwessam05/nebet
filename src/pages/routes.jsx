import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Rituals from './rituals';
import Origins from './origins';
import Ingredients from './ingredients';
import Experience from './experience';
import Error from './error';


const AppRoutes = () => {
    return ( 
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rituals" element={<Rituals />} />
                    <Route path="/origins" element={<Origins />} />
                    <Route path="/ingredients" element={<Ingredients />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default AppRoutes;