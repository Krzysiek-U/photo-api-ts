import FontSizeChanger from './FontSizeChanger';
import ContrastChanger from './ContrastChanger';
import SiteNavMenu from './SiteNavMenu';

const Nav = () => {   
    return (
    <nav className='contrast'>
      <SiteNavMenu/>
      <FontSizeChanger/>
      <ContrastChanger/>
    </nav>
  );
};

export default Nav