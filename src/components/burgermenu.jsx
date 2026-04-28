import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../supabase'; // 👈 your existing file
import Burgerlink from './burgerlink';

const Burger = ({ menuOpen, setMenuOpen }) => {
  const [navbar, setNavbar] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchNavbar = async () => {
      const { data, error } = await supabase
        .from('navbar')
        .select('*')
        .order('id');

      if (error) {
        console.error(error);
        return;
      }

      setNavbar(data);
    };

    fetchNavbar();
  }, []);

  return (
    <div
      className={`burgermenu ${menuOpen ? 'open' : ''}`}
      onClick={() => setMenuOpen(false)}
    >
      {navbar.map((item, index) => (
        <Burgerlink
            key={item.id}
            to={item.url}        
            title={item.text}   
            num={String(index + 1).padStart(2, '0')}
        />
        ))}
    </div>
  );
};

export default Burger;