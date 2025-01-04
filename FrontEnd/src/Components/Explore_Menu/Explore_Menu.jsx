import React from 'react'
import './Explore_Menu.css'
import {menu_list} from '../../assets/frontend_assets/assets'

const Explore_Menu = ({category,setCategory}) => {
  return (
   <div className="Explore_Menu" id="Explore_Menu">
    <h1>Explore our Menu</h1>
    <p className="explore_menu_text">Choose from our wide range of cuisines and dishes</p>
    <div className="explore_menu_list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=> setCategory (category=>category===item.menu_name? 'All': item.menu_name)}
                 key={index} className="explore-menu-list-item">
                <img src={item.menu_image} className={category===item.menu_name?'active':''} alt="" />
                <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr></hr>
   </div>
  )
}

export default Explore_Menu; 