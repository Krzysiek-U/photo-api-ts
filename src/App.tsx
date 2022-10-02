import React  from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
//import { HashRouter as Router, Link, Route, Routes  } from 'react-router-dom'
import Nav from './components/Nav';
import Main from './components/Main';
import PhotoBig from './components/PhotoBig';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';

function App() {

  return (
    //<Router basename={process.env.PUBLIC_URL + '/'}>
    //<Router basename='/photo-api-ts/'>    
    <Router > 
      <div className="App contrast" >
        <header className="header contrast">
          <Nav/>
        </header>        
        <Routes>
          <Route path= '/' element={<Main/>} />
          <Route path= '/photo' element={<PhotoBig/>} />
          <Route path= '/about' element={<About/>} />
        </Routes>
        <footer className="footer contrast">
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;