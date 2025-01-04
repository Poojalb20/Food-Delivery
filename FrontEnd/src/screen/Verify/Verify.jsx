import React,{useContext,useEffect} from 'react';
import './Verify.css';
import {useSearchParams,useNavigate} from 'react-router-dom';
import { StoreContext } from '../../Context/Store_context'
import axios from 'axios'

const Verify = () => {
const [searchParams,setsearchParams]=useSearchParams();
const success = searchParams.get('success');
const orderId = searchParams.get('orderId');

const {url} = useContext(StoreContext);
const navigate = useNavigate();

useEffect(()=>{
  const verifyPayment = async () => {
    try{
    const response=await axios.post(`${url}/api/order/verify`,{success,orderId})
    console.log(response.data)
    if(response.data.success){
      navigate("/myorders")
    }
    else{
    navigate("/")
    }
  }catch(error){
    console.log("Payment failed",error)
    navigate("/")
  }
};
  verifyPayment();
},[url, success, orderId, navigate]);

  return (
    <div className="verify">
    <div className="spinner"></div>
    </div>

);
};

export default Verify;