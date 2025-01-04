import { Route,Routes } from 'react-router-dom'
import {React} from 'react'
import Navbar from './Components/NavBar/Navbar'
import './App.css'
import Home from './screen/Home/Home'
import Cart from './screen/Cart/Cart'
import PlaceOrder from './screen/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import { Login_Popup } from './Components/Login_Popup/Login_Popup'
import { useState } from 'react'
import Verify from './screen/Verify/Verify'
import MyOrders from './screen/MyOrders/MyOrders'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App =()=>{
  const [showLogin,setShowLogin]= useState(false)
  return(
    <>
     <ToastContainer/>
    {
      showLogin ? <Login_Popup setShowLogin={setShowLogin}/> : <> </>
    }
    <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
        <Route path='/Verify' element={<Verify/>} />
        <Route path='/myorders' element={<MyOrders/>} />
        </Routes>
    </div>
    <Footer/>
    </>
  )
}


export default App
