import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Home from './Components/Home/Home'
import {Routes,Route} from 'react-router-dom'
import Product from './Components/Product/Product'
import Cart from './Components/Cart/Cart'

function App() {
  

  return (
    <>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
