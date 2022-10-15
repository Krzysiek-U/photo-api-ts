import React  from 'react';
import {useEffect}  from 'react';

interface ContrastChangerProps {
  onClick:  ( ) => void;    
}


const ContrastChanger = (props:ContrastChangerProps) => {  

    return (
      <span id='contrastContainer' className="contrast-container">
        <button id='changeContrast' title='Zmnień kontrast' className='a-button contrast-change' onClick={ () =>  props.onClick()  }><i className="fa fa-adjust"></i></button>
      </span>
  );
};

export default ContrastChanger