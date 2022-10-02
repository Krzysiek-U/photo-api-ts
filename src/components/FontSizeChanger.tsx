import  {useState}  from 'react';


interface ButtonProps {
  id: string;
  title: string; 
  txt: string;
  onClick:  ( ) => void;    
}

const Button = (props:ButtonProps) => {
  return ( 
    <button id={props.id} 
            title={props.title}
            className='a-button font-size-change' 
            onClick={props.onClick}
      >{props.txt}</button>
    );
}

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
      <div id='changeFontSizeContener'>
        <Button id={'changeFontSizeDown'} title={'Zmniejsz wielkość czcionki'}  txt={' - '} onClick={ () =>  htmlFont(rootFontSize-2) }/>
        <Button id={'changeFontSizeStart'} title={'Ustaw standardową wielkść czcionki'}  txt={' A '} onClick={ () =>  htmlFont(rootFontSizeStart) }/>
        <Button id={'changeFontSizeUp'} title={'Zwiększ wielkość czcionki'}  txt={' + '} onClick={ () =>  htmlFont(rootFontSize+2) }/>
      </div>
  );
};

export default FontSizeChanger