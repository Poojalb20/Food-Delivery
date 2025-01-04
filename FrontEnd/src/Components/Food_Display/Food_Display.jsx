 import React from 'react'
 import './Food_Display.css'
 import {food_list} from '../../assets/frontend_assets/assets'
import FoodItemCard from '../FoodItemCard/FoodItemCard'
import { StoreContext } from '../../Context/Store_context'
import { useContext } from 'react'

 const Food_Display = ({category}) => {
  const {food_list}=useContext(StoreContext) 
  return (
     <div className='Food_Display' id="Food_Display">
        <h2>Top dishes near you</h2>
        <div className="Food_Display_List">

        {
            food_list.map((food, index)=>{
              if(category===food.category || category==='All')
              return <FoodItemCard key={index} id={food._id} name={food.name} image={food.image} price={food.price} description={food.description}/>
            })
          }

     </div>
     </div>

     
   )
 }

export default Food_Display;