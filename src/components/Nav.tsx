import FontSizeChanger from './FontSizeChanger';
import ContrastChanger from './ContrastChanger';
import SiteNavMenu from './SiteNavMenu';

interface NavProps {
  onClick: ( ) => void;
}

const Nav = (props:NavProps) => {   
    return (
    <nav className='navigation-bar contrast'>
      <SiteNavMenu/>
      <FontSizeChanger/>
      <ContrastChanger  onClick={ props.onClick } />
    </nav>
  );
};

export default Nav