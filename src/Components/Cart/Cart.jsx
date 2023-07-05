import React, { useContext } from 'react';
import './cart.css';
import { CartContext } from '../../MyContext/MyContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
      {cartItems.map((cartItem) => (
        <div className="cart-main" key={cartItem.id}>
          <div className="cart-image">
            <img src={cartItem.image} alt="" />
          </div>
          <div className="description">
            <h2>{cartItem.title}</h2>
            <p>{cartItem.price}</p>
            <p>{cartItem.description}</p>
            <button onClick={() => removeFromCart(cartItem.id)}>
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
