
import {createContext, useState,useEffect} from 'react';
import { food_list } from '../assets/frontend_assets/assets';
import axios from "axios";

export const StoreContext=createContext(null);


const StoreContextProvider  =(props)=>{
    const [token, setToken] = useState('');
     
    /*useEffect(()=>{
        async function loadData(){
            await fetchFoodList(); 
         if(localStorage.getItem('token')){
         setToken(localStorage.getItem('token'));
     }
 }loadData();
 },[]) */


 const url = "https://food-delivery-1-s1zq.onrender.com"
 const [cartItem, setCartItem] = useState({});



const addToCart=async(itemId)=>{
    console.log(itemId)
    if(!cartItem[itemId]){
        setCartItem({...cartItem,[itemId]:1})
    }
    else{
        setCartItem({...cartItem,[itemId]:cartItem[itemId]+1})
    }
    if(token){
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
}

const removeFromCart=async(itemId)=>{
        setCartItem({...cartItem,[itemId]:cartItem[itemId]-1})
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    
}
const getTotalCartAmount=()=>{
    let total=0;
    for(let item in cartItem){
        if(cartItem[item]>0){
        let itemInfo=food_list.find((food)=>food._id===item);
        total+=itemInfo.price*cartItem[item];
        }
    }
    return total;
}
const [food_list,setFoodList] = useState([]);

const fetchFoodList = async()=>{
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
}

const loadCartData  = async(curToken)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token:curToken}})
    setCartItem(response.data.cartData)
  }

  useEffect(()=>{
        async function loadData(){
            await fetchFoodList(); 
         if(localStorage.getItem('token')){
         setToken(localStorage.getItem('token'));
         await loadCartData(localStorage.getItem("token"))
     }
 }loadData();
 },[])



    const ContextValues={
            token,
            setToken,
            url,
            food_list,
            cartItem,
            setCartItem,
            addToCart,
            removeFromCart,
            getTotalCartAmount
    }


    return(
        <StoreContext.Provider value={ContextValues}>
            {props.children}
        </StoreContext.Provider>
    )
}

export {StoreContextProvider};