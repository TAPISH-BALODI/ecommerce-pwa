// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate=useNavigate()
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Commerce</h1>
        <nav>
          <span style={{cursor:'pointer'}} onClick={()=>navigate('/')} className="ml-4">Home</span> 
          <span style={{cursor:'pointer'}} onClick={()=>navigate('/cart')} className="ml-4">Cart</span> 

         
        </nav>
      </div>
    </header>
  );
};

export default Header;
