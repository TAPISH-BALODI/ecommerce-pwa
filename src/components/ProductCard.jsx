
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  
  const [adding,setAdding]=useState(false)
  const handleAddToCart = () => {
    setAdding(true)
    dispatch(addToCart(product));
    setTimeout(() => {
      setAdding(false)
    }, 1000);
  };

  return (
    <div className="border rounded p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <div  style={{display:'flex-start',justifyContent:'space-between',flexDirection:'column',alignItems:'center'}}>

      <div  style={{display:'flex-start',justifyContent:'space-between',flexDirection:'column',alignItems:'center'}}>
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-700" style={{fontSize:'20px'}}>${product.price}</p>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>

      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
       { adding?"Added !":"Add to Cart"}
      </button>
      <p>
      <span  style={{fontSize:'25px'}}>&#9733;</span> : <span style={{padding:'4px',borderRadius:"4px",backgroundColor:product.rating.rate>=4&&product.rating.rate<5?'#03C03C':product.rating.rate>=3.5&&product.rating.rate<4?'orange':product.rating.rate>=0&&product.rating.rate<3.5?'#fd5c63':"grey"}}>{product.rating.rate}</span>
      </p>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
