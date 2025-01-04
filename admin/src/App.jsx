import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Add from './screens/Add/Add'
import List from './screens/List/List'
import Order from './screens/Order/Order'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const url = 'https://food-delivery-1-s1zq.onrender.com'
  return (
    <div className='app'>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
       <Route path='/add' element={<Add url={url}/>}></Route>
       <Route path='/list' element={<List url={url}/>}></Route>
       <Route path='/order' element={<Order url={url}/>}></Route>
       </Routes>
      </div>
    </div>
  )
}

export default App