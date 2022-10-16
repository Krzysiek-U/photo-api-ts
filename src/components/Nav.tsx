import {useState, useEffect}  from 'react';

import FontSizeChanger from './FontSizeChanger';
import ContrastChanger from './ContrastChanger';
import SiteNavMenu from './SiteNavMenu';

interface NavProps {
  pageContrast: boolean;
  onClick: ( ) => void;
}

const Nav = (props:NavProps) => {   

  let contrastOn: string = '';

  useEffect(() => { 
    if(props.pageContrast) contrastOn = 'contrast-on';
    console.log('nav contrastOn: '+props.pageContrast+' contrastOn '+ contrastOn);
  }, [props.pageContrast])   

    return (
    <nav className={`navigation-bar contrast ${contrastOn}`}>
      <SiteNavMenu/>
      <FontSizeChanger/>
      <ContrastChanger  onClick={ props.onClick } />
    </nav>
  );
};

export default Nav