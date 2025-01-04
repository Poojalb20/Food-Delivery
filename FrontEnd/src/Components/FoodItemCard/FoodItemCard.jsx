import React from 'react'
import {useState} from 'react'
import { useContext } from 'react'
import './FoodItemCard.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/Store_context'


const FoodItemCard = ({id,name,image,description,price}) => {
  const {cartItem, addToCart, removeFromCart,url}=useContext(StoreContext)

  return (
    <div className="Food_Item_Card">
        <div className="Food_Item_Image_Container">
            <img className='Food_Item_Image' src={url+"/images/"+image} />
            {
              !cartItem[id]
              ? <img src={assets.add_icon_white} className='add' onClick={()=>addToCart(id)}/>
              : <div className="Food_Item_Counter">
                <img src={assets.remove_icon_red} onClick={()=> removeFromCart(id) } alt=""/>
                <p>{cartItem[id]}</p>
                <img src={assets.add_icon_green} onClick={()=> addToCart(id)} />
              </div>
            }
        </div>
        <div className="Food_Item_Info">
            <div className="Food_Item_Rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="start"/>

            </div>
            <p className='Food_Item_Desc'>{description}</p>
            <p className='Food_Item_Price'>&#8377;{price}</p>
        </div>
    </div>
  )
}

export default FoodItemCard