import { Link } from "react-router-dom";

const SiteNavMenu = () => {  
    return (
      <div id='siteNavMenu' className='site-nav-menu'>
        <div>
          <Link to={`/`}>Galeria</Link>
          <span>|</span>
          <Link to={`/about`}>O galerii</Link>
        </div>
      </div>
  );
};

export default SiteNavMenu