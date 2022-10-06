import FontSizeChanger from './FontSizeChanger';
import ContrastChanger from './ContrastChanger';
import SiteNavMenu from './SiteNavMenu';

const Nav = () => {   
    return (
    <nav className='navigation-bar contrast'>
      <SiteNavMenu/>
      <FontSizeChanger/>
      <ContrastChanger/>
    </nav>
  );
};

export default Nav