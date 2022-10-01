import { Link } from "react-router-dom";

const SiteNavMenu = () => {  
    return (
      <div id='siteNavMenu' className='site-nav-menu'>
        <div>
          <Link to={`/photo-api-ts/`}>Galeria</Link>
          <span>|</span>
          <Link to={`/photo-api-ts/about`}>O galerii</Link>
        </div>
      </div>
  );
};

export default SiteNavMenu