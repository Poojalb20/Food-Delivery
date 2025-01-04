import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id="footer">
        <div className="Footer_Content">
            <div className="Footer_Left">
                <img src={assets.logo} alt=""/>
                <p>Tomato allows users to explore a wide variety of restaurants and dishes, offering personalized recommendations based on taste preferences and dietary needs. It features easy-to-use navigation for browsing menus, placing orders, and tracking delivery in real-time. With user reviews, ratings, and seamless payment options, the app enhances the overall dining experience from discovery to delivery.</p>
                <div className="Footer_icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                </div>
            </div>
            <div className="Footer_Center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="Footer_Right">
                <h2>Get in touch</h2>
                <ul>
                    <li>6362513882</li>
                    <li>help@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='Footer_Copyright'>Copyright 2024 &copy; tomato.com. All rights reserved</p>
    </div>
  )
}

export default Footer