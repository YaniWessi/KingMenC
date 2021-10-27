import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <React.StrictMode>
      <Router>
     <App />
     </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// What is a single page application. 
// Its a page that loads once but you can have access to multple pages. main thing about that: all the HtML CSS javascript. All the things that your app has in retrived all at once.
// what is the benefit of loading everything at once? 
// it mostly for faster transition. No loading between the pages unless you do some kind of (request). Faster use of the application.

// client side routing vs saver side routing. 

// set up a react application using ( router ) (route)  and ( link). 
// the new hooks that come with this new version 5 that comes with react Routeer. (use param hook) (adding dynamic routes) ( route match to add nested routes to an application) (use routers history hook) to be able to progammatically navigate to other routes without having to use that link component.  