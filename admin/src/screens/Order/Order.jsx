import {useEffect,useState} from 'react'
import './Order.css'
import axios from "axios"
import {toast} from 'react-toastify'
import {assets} from '../../assets/admin_assets/assets'

const Orders = ({url}) => {

  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async()=>{
    try{
    const response = await axios.get(url+"/api/order/list")
    if(response.data.success && Array.isArray(response.data.data)){
      setOrders(response.data.data)
      console.log(response.data.data)
    }
    else{
      toast.error("error")
    }
  }catch(error){
    console.error("Error fetching orders:", error);
    toast.error("An error occurred while fetching orders.");
  }
}

  const statusHandler = async(e,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:e.target.value
    })
    if(response.data.success){
      await fetchAllOrders()
    }
  }

  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((orders, index) =>{console.log(orders)})}
        {orders.map((orders, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div>
              <p className="order-item-food">
                {orders.items.map((item, index) => {
                  if (index === orders.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p className='order-item-name'>{orders.address.first_name+" "+orders.address.last_name}</p>
              <div className='order-item-address'>
                <p>{orders.address.street+", "}</p>
                <p>{orders.address.city+", "+orders.address.state+", "+orders.address.country+", "+orders.address.zip_code}</p>
              </div>
              <p className='order-item-phone'>{orders.address.phone}</p>
            </div>
            <p>Items : {orders.items.length}</p>
            <p>${orders.amount}</p>
            <select onChange={(e)=>statusHandler(e,orders._id)} value={orders.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Orders