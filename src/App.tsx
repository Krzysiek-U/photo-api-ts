import React  from 'react';
import {useState}  from 'react';
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
//import { HashRouter as Router, Link, Route, Routes  } from 'react-router-dom'
import Nav from './components/Nav';
import Main from './components/Main';
import PhotoBig from './components/PhotoBig';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';

function App() {
  
  const [page, setPage] = useState(8);

  const pageConfig = (pageNumber:number) => {  
    setPage(pageNumber);
  }    

  return (
    //</Router basename={process.env.PUBLIC_URL}>
    <Router>   
      <div className="App contrast" >
        <header className="header contrast">
          <Nav/>
        </header>        
        <Routes>
          <Route path= '/' element={<Main page={page} pageConfig={pageConfig}/>} />
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