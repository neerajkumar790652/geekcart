import React, { useContext } from 'react'
import './ProductCard.css'
import { CartContext } from '../../MyContext/MyContext';
const ProductCard = ({product}) => {
  const {addToCart} = useContext(CartContext)
    const {image,price,title,description} =product;
  return (
    <div className='product-card'>
        <img src={image} alt="default"/>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <button onClick={()=>addToCart(product.id)}>Add to Cart</button>
      
    </div>
  )
}

export default ProductCard
