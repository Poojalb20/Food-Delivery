import React,{useState,useContext,useEffect} from 'react'
import './MyOrders.css'
import { StoreContext } from '../../Context/Store_context'
import axios from 'axios'
import { assets } from '../../assets/frontend_assets/assets'

const MyOrders = () => {


    const [data,setData]=useState([])
    const {url,token}=useContext(StoreContext)

    const fetchOrders=async()=>{
        try{
        const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data)
    }catch(error){
        console.error("Failed to fetch orders:", error) 
    }
}

    useEffect(()=>{
        if(token){
            fetchOrders()
        }
    },[token])
  return (
    <div className="my-orders">
        <h2>My Orders</h2>
        <div className="container">
            {
                data.map((order,index)=>(
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt=""/>
                            <p>
                                {order.items && Array.isArray(order.items) ? 
                                    order.items.map((item, itemIndex) => 
                                      `${item.name} x ${item.quantity}${itemIndex === order.items.length - 1 ? '' : ' -|- '}`
                                    ) 
                                    : 'No items available'}
                                    </p>
                                    <p>&#8377;{' '}{order.amount}</p>
                                    <p>Items : {order.items ? order.items.length : 0}</p>
                                    <p><span>&#x25cf;</span><b>{order.status}</b></p>

                        </div>       
                    ))
                }
            
        </div>
    </div>
  )
}

export default MyOrders