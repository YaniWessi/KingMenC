import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import GetAQuoteButton from './Components/GetAQuoteButton';
import WhatWeDo from './Components/WhatWeDo';
import './App.css';


function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <GetAQuoteButton/>
      {/* for my commit */}
        {/* <WhatWeDo/> */}

      </div>
    </>
  );
}

export default App;




{/* <nav>
<h1>Kingsman Construction</h1>
<div>
  <Link to="/">App</Link>
  <Link to="/AboutUs">AboutUs</Link>
  <Link to="/ContactUs">ContactUs</Link>
  <Link to="/Gallery">Gallery</Link>
  <Link to="/GetaQuote">GetaQuote</Link>
  <Link to="/OurProcess">OurProcess</Link>
  <Link to="/Testimonilas">Testimonilas</Link>
</div>
</nav> */}
{/* <Route path='/' component={App} />   */}