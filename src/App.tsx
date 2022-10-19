import React  from 'react';
import {useState, useEffect}  from 'react';
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import Nav from './components/Nav';
import Main from './components/Main';
import PhotoBig from './components/PhotoBig';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';

function App() {
  
  const [pageCfg, setPageCfg] = useState({page: 1, limit: 30 });
  const [pageContrast, setPageContrast] = useState(false);
  const [contrastOn, setContrastOn] = useState('');

  useEffect(() => { 
    pageContrast ? setContrastOn('contrast-on') : setContrastOn('');
  }, [pageContrast])   


  const changeContrast  = () => { 
    pageContrast ? setPageContrast(false) : setPageContrast(true) ;
  }

  const pageConfig = (pageNumber:number, limitNumber: number) => {  
    setPageCfg({page: pageNumber, limit: limitNumber});
  }    

  return (
    //</Router >
    <Router basename={process.env.PUBLIC_URL}>   
      <div className={`app contrast ${contrastOn}`}>
        <header className={`header contrast ${contrastOn}`}>
          <Nav pageContrast={pageContrast} onClick={ changeContrast }  />
        </header>   
        <Routes>
          <Route path= '/' element={<Main pageCfg={pageCfg}  pageContrast={pageContrast} pageConfig={pageConfig}/>} />
          <Route path= '/photo' element={<PhotoBig  pageContrast={pageContrast} />} />
          <Route path= '/about' element={<About pageContrast={pageContrast} />} />
        </Routes>
        <footer className={`footer contrast ${contrastOn}`}>
          <Footer pageContrast={pageContrast} />
        </footer>
      </div>
    </Router>
  );
}

export default App;