import {useEffect,useState} from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/productCard';
import './Product.css'

const Product = () => {
  const [products,setProducts] = useState([]);
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then((response)=>{setProducts(response.data),console.log(response.data)}).catch((error)=>console.log(error))

},[])
  return (
    <div className='product-main'>
      <div className='product-list'>
       {products.map((product)=>{
        return(
          <ProductCard  product={product} key={product.id}/>
        )
       })}
      </div>
    </div>
  )
}

export default Product
