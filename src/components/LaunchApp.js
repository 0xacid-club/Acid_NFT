import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import './LaunchApp.css';
import NavBar from './Navbar/Navbar';
import Filter from './Filter/Filter';
import SocialLinks from './Socials/Socials';
import NftRow from './NFTRows/NFTRows';
import ConnectWallet from './ConnectWallet/ConnectWallet';


const LaunchApp = () => {
  return (

    <div>
      <NavBar/>
    
      <Filter/>
        
        <div id="nft_section">
        <NftRow/>
        <NftRow/>
        <NftRow/>
        <NftRow/>
        <NftRow/>
        <NftRow/>
        </div>
    </div>
  )
};

export default LaunchApp;