import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';
import ConnectWallet from '../ConnectWallet/ConnectWallet';
import SocialLinks from '../Socials/Socials';


const NavBar = () =>{
  return(
    <nav id="app_navbar">
      <SocialLinks/>
      <FontAwesomeIcon icon={faBook} transform="grow-10" className="social_app pointer" id="book"/>
      <ConnectWallet/>
    </nav>
  )
}

export default NavBar;