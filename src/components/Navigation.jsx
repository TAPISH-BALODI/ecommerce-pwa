
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    const navigate=useNavigate()
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="container mx-auto flex">
        <li className="mr-6"><span style={{cursor:'pointer'}} onClick={()=>navigate('/')} className="ml-4">Home</span> 
        </li>
        <li className="mr-6"><span style={{cursor:'pointer'}} onClick={()=>navigate('/products')} >Products</span> 
        </li>
        <li className="mr-6"><span style={{cursor:'pointer'}} onClick={()=>navigate('/cart')}>Cart</span> 
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
