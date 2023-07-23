import React from 'react';

import './NFTRows.css';
import NftSize from '../NftSize/NftSize';



const NftRow = () =>{
  return (

      <div className="group">
      <NftSize/>
      <NftSize/>
      <NftSize/>
      <NftSize/>
      </div>

    
  );
}

export default NftRow;