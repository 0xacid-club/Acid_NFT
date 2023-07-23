import React from 'react';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";

import NftRow from '../components/NFTRows/NFTRows';
import NavBar from '../components/Navbar/Navbar';
import SocialLinks from '../components/Socials/Socials';
import LaunchApp from '../components/LaunchApp';
import HomePage from '../components/HomePage';




class App extends React.Component {
  render() {
    return (
      <div className="App">
   
        

       

{/* Defining routes path and rendering components as element */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/launchapp" element={<LaunchApp/>} />
        </Routes>
        
      </div>
    );
  }
}


export default App;