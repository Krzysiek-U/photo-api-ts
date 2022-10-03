import { NavLink } from "react-router-dom";

const SiteNavMenu = () => {  
    return (
      <div id='siteNavMenu' className='site-nav-menu'>
        <div>
          <NavLink to={`/`}>Galeria</NavLink>
          <span>|</span>
          <NavLink to={`/about`}>O galerii</NavLink>
        </div>
      </div>
  );
};

export default SiteNavMenu