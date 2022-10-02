interface PhotoNumbChangerProps {
  limit: number;
  changePhotoNumb: ( photoNumb:number ) => void;
}

interface ButtonProps {
  limitNew: number;
  limit: number;    
  onClick:  ( ) => void;    
}

const Button = (props:ButtonProps) => {
  return ( 
    <button id={`photoNumb_${props.limit}`} title={`zmień ilość wyświetlanych zdjęć na stronie na ${props.limit}`}
            className= { props.limitNew === props.limit ? `a-button active photoNumb-${props.limit} ` : `a-button photoNumb-${props.limit} `  }   
            onClick={props.onClick}
            >{props.limitNew}</button>
    );
}
 
const PhotoNumbChanger = (props:PhotoNumbChangerProps) => { 
    
    return (
      <div id='changingPhotoNumb' className='changing-photo-numb contrast'>
        <div className='changing-photo-numb-container'>
          <span>Zmień ilość zdjęć na stronie </span>
          <Button limit={props.limit} limitNew={20} onClick={ () =>  props.changePhotoNumb(20) }/>
          <Button limit={props.limit} limitNew={30} onClick={ () =>  props.changePhotoNumb(30) }/>
          <Button limit={props.limit} limitNew={50} onClick={ () =>  props.changePhotoNumb(50) }/>
          <Button limit={props.limit} limitNew={100} onClick={ () =>  props.changePhotoNumb(100) }/>
        </div>
      </div>
  );
};

export default PhotoNumbChanger