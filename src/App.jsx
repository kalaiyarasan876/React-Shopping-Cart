import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import { items } from './components/Data'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'


const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App