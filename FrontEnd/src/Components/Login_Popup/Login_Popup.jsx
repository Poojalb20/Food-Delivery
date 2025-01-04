import React from 'react'
import './Login_Popup.css'
import { useState ,useEffect,useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/Store_context'
import axios from 'axios'
import { toast } from 'react-toastify'


const Login_Popup = ({setShowLogin}) => {
  const {url,setToken}=useContext(StoreContext)
  const [curState,setCurState]=useState('Sign Up')
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler=(e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value})
  }

  const onLogin=async(e)=>{
       e.preventDefault()
      let newUrl=url;
      if(curState==="Sign Up"){
        newUrl+='/api/user/register';
      }
      else{
        newUrl+='/api/user/login';
      }
      try {
        const response = await axios.post(newUrl, data);
        //if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        //}
    } catch (error) {
        //console.log(error.response.data.message);
        toast.error(error.response.data.message)
    }
};

  
  return (
    <div className="login-popup">
    <form onSubmit={onLogin}  action="" className='login-popup-container'>
    <div className="login-popup-title">
      <h2>{curState}</h2>
      <img src={assets.cross_icon} onClick={()=> setShowLogin(false)} alt=""/>
    </div>
    <div className="login-popup-inputs">
      {curState==='Sign Up'? <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder='Your Name' required/>:<></>}
      <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder='E-mail' required/>
      <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder='password' required/>
      </div>
      <button type='submit'> {curState}</button>
      <div className="login-popup-condition">
        <input type="checkbox"/>
        <p>By continuing,I agree to the terms and conditions</p>
    </div>
    {
      curState==='Sign Up'
      ?<p>Already have an account?<span onClick={()=>setCurState('Login')}>Login Here</span></p>
    :<p>Create a new account <span onClick={()=>setCurState('Sign Up')}> Click here</span></p>

      }
    </form>
    </div>
  )
}

export {Login_Popup};