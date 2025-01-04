import React from 'react'
import './App_Download.css'
import {assets} from '../../assets/frontend_assets/assets'

const App_Download = () => {
  return (
    <div className="app-download" id="app-download">
        <p>For Bettter Experience Download Our App <br/> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt=""/>
            <img src={assets.app_store} alt=""/>


        </div>

    </div>
  )
}

export default App_Download