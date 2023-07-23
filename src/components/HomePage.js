import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';
import marble from '../marble.png';
import SocialLinks from './Socials/Socials';
import ConnectWallet from './ConnectWallet/ConnectWallet';


const HomePage = () => {
  return (
    <div>

      <div className="line" id="line1"></div>
      <div className="line" id="line2"></div>

      <img id='main_img' src={marble}/>
      <h1>0x Chemist Club</h1>
      <div id="p_div">
      <p>tate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.tate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
     
      <Link to='./launchapp'><button type="button" className="pointer" id="launch_app">Launch App</button></Link>
      
      <SocialLinks/>
      
    </div>
  )
}

export default HomePage;