import React from 'react'
import './Cart.css'
import {StoreContext} from '../../Context/Store_context'
import { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import {Link} from 'react-router-dom'

const Cart = () => {
  const {food_list,cartItem,addToCart,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext)
  return (
   <div className="cart">
    <div className="cart-items">
    <div className="cart-items-title">
      <p>Items</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
     
    </div>
    <br/>
    <hr/>
    {
        food_list.map((food,index)=>{
          if(cartItem[food._id]>0)
            return(
              <>
                <div className="cart-items-title cart-items-item">
                <img src={url +"/images/" + food.image} alt=""/>
                <p>{food.name}</p>
                <p>${food.price}</p>
                <div className="quantity-counter">
                  <img src={assets.remove_icon_red} onClick={()=>removeFromCart(food.id)} alt="" />
                  <p>{cartItem[food._id]}</p>
                  <img src={assets.add_icon_green} onClick={()=>addToCart(food.id)}/>
                  </div>
                <p>${cartItem[food._id]*food.price}</p>
               
                </div>
                <hr/>
              </>
            )
          }
        )
    }
   </div>
   <div className="cart-bottom">
    <div className="cart-total">
      <h2>Cart Total</h2>
      <div className="cart-total-details">
        <p>Sub Total</p>
        <p>{getTotalCartAmount()}</p>
      </div>
      <hr/>
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>{getTotalCartAmount()==0?0:2}</p>
      </div>
      <hr/>
      <div className="cart-total-details">
        <p>Total</p>
        <p>{getTotalCartAmount()==0?0:getTotalCartAmount()+2}</p>
      </div>
      <hr/>
    
    <div className="cart-promocode">
      <p>If you have a  promocode,enter it here</p>
      <div className="cart-promocode-input">
        <input type='text' placeholder='enter promocode'/>
        <button>Apply</button>
      </div>

      <Link to='/PlaceOrder'>
      <button className='checkout'>Proceed to checkout</button>
      </Link>
    </div>
    </div>
   </div>
</div>
)
} 


export default Cart