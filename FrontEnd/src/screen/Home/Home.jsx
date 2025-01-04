import {useState} from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Explore_Menu from '../../Components/Explore_Menu/Explore_Menu'
import React from 'react'
import Food_Display from '../../Components/Food_Display/Food_Display'
import App_Download from '../../Components/App_Download/App_Download'

const Home = () => {
  const [category, setCategory]=useState('All');
  return (
    <div  className="home">
            <Header/>
            <Explore_Menu category={category} setCategory={setCategory}/>
             <Food_Display category={category}/> 
             <App_Download/>
          
    </div>
  )
}

export default Home