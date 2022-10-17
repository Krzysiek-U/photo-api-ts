import { NavLink } from "react-router-dom";

const SiteNavMenu = () => {  
    return (
      <div id='siteNavMenu' className='site-nav-menu'>
          <div><NavLink
            className={'link'}
            to={`/`} 
            title= { `Przejdź do strony Galeria` }
          >Galeria</NavLink></div>
          <div><NavLink
            className={'link'}
            to={`/about`}            
            title= { `Przejdź do podstrony O galerii` }
          >O galerii</NavLink></div>
      </div>
  );
};

export default SiteNavMenu