import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import { CartProvider } from './context/CartContext'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <CartProvider>
      <div className='max-wpx-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Product details: accept an id param for deep linking from cards */}
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {/* Drawer mounted at root so it overlays content across the app */}
      <CartDrawer />
    </CartProvider>
  )
}

export default App
