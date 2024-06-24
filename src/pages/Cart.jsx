
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const getTotal=()=>{
    let tempTotal=0
    for(let i=0;i<cart.length;i++)
      {
          tempTotal+=cart[i].price
      }
      return tempTotal
  }
  const price=getTotal()
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
        <ul>
          {cart.map(item => (
            <li key={item.id} className="border-b py-4 flex justify-between">
              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700">
                  ${item.price} x <span style={{fontWeight:'bold'}}>{item.quantity}</span>
                </p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div style={{border:'1px solid grey',height:'1px'}}>
           
        </div>
        <ul>
       <li style={{fontSize:'20px',fontWeight:'bold'}}>${price}</li> 
      </ul>
      </>
      )}
    </div>
  );
};

export default Cart;
