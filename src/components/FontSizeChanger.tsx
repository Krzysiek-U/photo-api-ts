import  {useState}  from 'react';

const FontSizeChanger = () => {  
  
  let doc = document.getElementsByTagName("html");
  let rootFontSizePx = window.getComputedStyle(doc[0]).fontSize.split('px');

  const [rootFontSizeStart, setRootFontSizeStart] = useState(Number(rootFontSizePx[0]));
  const [rootFontSize, setRootFontSize] = useState(rootFontSizeStart);

  const htmlFont  = (rootFontSize:number) => {    
    if (rootFontSize > 12 && rootFontSize < 28) setRootFontSize(rootFontSize);
    let doc = document.getElementsByTagName("html");
    doc[0].style.fontSize = rootFontSize+"px";
  }

    return (
      <span id='changeFontSizeContener'>
        <a id='changeFontSizeDown' title='Zmniejsz wielkość czcionki' className='font-size-change' href="#" onClick={ () =>  htmlFont(rootFontSize-2)  }> - </a>
        <a id='changeFontSizeStart' title='Ustaw standardową wielkść czcionki' className='font-size-change'  href="#" onClick={ () =>  htmlFont(rootFontSizeStart)  }> A </a>
        <a id='changeFontSizeUp' title='Zwiększ wielkość czcionki' className='font-size-change'  href="#" onClick={ () =>  htmlFont(rootFontSize+2)  }> + </a>
      </span>
  );
};

export default FontSizeChanger