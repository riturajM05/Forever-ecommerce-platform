import React from 'react'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PlaceOrders from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={< Collections />} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-order' element={<PlaceOrders/>} />
        <Route path='/Product/:ProductId' element={<Product/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
