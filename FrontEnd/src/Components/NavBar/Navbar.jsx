import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import {Link,useNavigate} from 'react-router-dom'
import { StoreContext } from '../../Context/Store_context'


const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState('home')
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
  const logout =()=>{
    localStorage.removeItem("token")
    setToken("")
    Navigate("/")
  }
  const Navigate = useNavigate();
  return (
    <div className='Navbar'>
    <Link to='/'><img className="logo" src={assets.logo} alt=''/></Link>
    <ul className="Navbar-menu">
        <Link to='/' className={menu==='home'?'active':''} onClick={()=>setMenu('home')}>home</Link>
        <a href="#Explore_Menu" className={menu==='menu'?'active':''} onClick={()=>setMenu('menu')}>menu</a>
        <a href="#app-download" className={menu==='mobile-app'?'active':''} onClick={()=>setMenu('mobile-app')} >mobile-app</a>
        <a href="#footer" className={menu==='contact-us'?'active':''} onClick={()=>setMenu('contact-us')}>contact-us</a>
    </ul>
    <div className="Navbar-right">
        <img src={assets.search_icon} alt="search"/>
        <div className="Navbar-cart-icon">
            <Link to='/cart'>
            <img src={assets.basket_icon} alt="basket"/> </Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {  
            !token          
             ? <button onClick={() => setShowLogin(true)}>Sign in</button>
             : <div className="navbar-profile">
               <img src={assets.profile_icon} alt="bag"/>
               <ul className='nav-profile-dropdown'>
                 <li onClick={()=>Navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> Orders</li><hr />
                 <li onClick={logout}> <img src={assets.logout_icon} alt="" />LogOut </li>
               </ul>
             </div>           
            }

    </div>
    </div>
  )
}

export default Navbar;