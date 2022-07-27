import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './pages/Main';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import Footer from './pages/Footer';




ReactDOM.render(
    <React.StrictMode>
        <Main />
        <Footer/>
    </React.StrictMode>,

    
    document.getElementById("root"),

  

    
  );

  /*<BrowserRouter>
  <Main />
  </BrowserRouter>*/
reportWebVitals();