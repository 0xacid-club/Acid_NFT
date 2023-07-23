import React from 'react';
import {useState} from 'react';

import './ConnectWallet.css';

const ConnectWallet = () => {

 /*Checks whether wallet is installed in browser when button clicked*/
  const [buttonText, setButtonText] = useState('Connect Wallet');
  const [networkText, setNetworkText] = useState('');
  
  const handleClick = () =>{
    if (!window.ethereum) {
      setButtonText('Install Wallet');
      return false;
     } else {
       loginWithWallet();
       return true;
  }

  }
 /*Prompts to connect to wallet if installed*/
  async function loginWithWallet(){
    const accounts = await window.ethereum.request({method:'eth_requestAccounts'}).catch((e) =>
      alert('Connect to Wallet'));
      setButtonText('Connect to Wallet');
      setNetworkText('...${accounts[0][39]}${accounts[0][40]}${accounts[0][41]}');
    }

  return (
    <div id="wallet_position">
    <button type="button" className="pointer" id="connect_wallet" onClick={handleClick}>{buttonText}</button>
    <div id="network">{setNetworkText}</div>
    </div>
  )
}

export default ConnectWallet;






