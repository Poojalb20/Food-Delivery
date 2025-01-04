import React from 'react'
import './PlaceOrder.css'
import { useContext, useState ,useEffect} from 'react'
import { StoreContext } from '../../Context/Store_context'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const PlaceOrder = () => {
  const navigate=useNavigate();
  const { getTotalCartAmount, food_list, cartItem, token, url } = useContext(StoreContext)
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    zip_code: "",
    country: "",
    phone: "",
    city: "",
    state: ""
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    let orderItems = []
    console.log(e)
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {

        let itemInfo=item
        itemInfo.quantity = cartItem[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    }

    try {
      let response = await axios.post(url + "/api/order/place", orderData, { headers: {token} })
      console.log(response.data)
      const { session_url } = response.data
      window.location.replace(session_url)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0)
      navigate('/cart')
  },[token])

  return (
    <div>
      <form onSubmit={onSubmitHandler} classname="Place-Order" action="">
        <h1>Delivery Information</h1>
        <div className="mul">
          <input name="first_name" value={data.first_name} onChange={(e) => onChangeHandler(e)} type="text" placeholder='First Name' />
          <input name="last_name" value={data.last_name} onChange={(e) => onChangeHandler(e)} type="text" placeholder='Last Name' />
        </div>
        <div className="mul">
          <input name="email" value={data.email} onChange={(e) => onChangeHandler(e)} type="email" placeholder="Email address" />
        </div>
        <div className="mul">
          <input name="street" value={data.street} onChange={(e) => onChangeHandler(e)} type="text" placeholder="Street" />
          <input name="city" value={data.city} onChange={(e) => onChangeHandler(e)} type="text" placeholder="city" />
        </div>
        <div className="mul">
          <input name="state" value={data.state} onChange={(e) => onChangeHandler(e)} type="text" placeholder="state" />
          <input name="zip_code" value={data.zip_code} onChange={(e) => onChangeHandler(e)} type="text" placeholder='zip-code' />
        </div>
        <div className="mul">
          <input name="country" value={data.country} onChange={(e) => onChangeHandler(e)} type="text" placeholder="Country" />
          <input name="phone" value={data.phone} onChange={(e) => onChangeHandler(e)} type="number" placeholder="Phone" />
        </div>

      <div className="cart-total">
        <h2>Cart Total</h2>
        <div className="cart-total-details ">
          <p>Subtotal</p>
          <p>{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p> {getTotalCartAmount() == 0 ? 0 : 2} </p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>{getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 2}</p>
        </div>
        <hr />
        <button type="submit" className='place-order' id='place-order' > Proceed to pay</button>
      </div>
      
      </form>
    </div>
  )
}



export default PlaceOrder;