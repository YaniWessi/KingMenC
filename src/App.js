import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import GetAQuoteButton from './Components/GetAQuoteButton';
import NavMenu from './Components/Header/MenuContainer/MenuContainer';
import NavHeader from './Components/Header/HeadExport/HeaderExport';
import WhatWeDo from './Components/WhatWeDo';
import './App.css';


function App() {
  return (
    <>
      <div className="App">
        <NavHeader/>
        <GetAQuoteButton/>
      </div>
    </>
  );
}

export default App;



