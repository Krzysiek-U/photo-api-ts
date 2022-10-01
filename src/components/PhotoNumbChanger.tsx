interface PhotoNumbChangerProps {
  limit: number;
  changePhotoNumb: ( photoNumb:number ) => void;
}

interface ActiveLinkProps {
  limitNew: number;
  limit: number;    
  onClick:  ( ) => void;    
}

const ActiveLink = (props:ActiveLinkProps) => {
  return ( 
    <button id={`photoNumb_${props.limit}`} title={`zmień ilość wyświetlanych zdjęć na stronie na ${props.limit}`}
            className= { props.limitNew === props.limit ? `a-button active photoNumb-${props.limit} ` : `a-button photoNumb-${props.limit} `  }   
            role="button"
            onClick={props.onClick}
            >{props.limitNew}</button>
    );
}
 
const PhotoNumbChanger = (props:PhotoNumbChangerProps) => { 
    
    return (
      <div id='changingPhotoNumb' className='changing-photo-numb contrast'>
        <div className='changing-photo-numb-container'>
          <span>Zmień ilość zdjęć na stronie </span>
          <ActiveLink limit={props.limit} limitNew={20} onClick={ () =>  props.changePhotoNumb(20) }/>
          <ActiveLink limit={props.limit} limitNew={30} onClick={ () =>  props.changePhotoNumb(30) }/>
          <ActiveLink limit={props.limit} limitNew={50} onClick={ () =>  props.changePhotoNumb(50) }/>
          <ActiveLink limit={props.limit} limitNew={100} onClick={ () =>  props.changePhotoNumb(100) }/>
        </div>
      </div>
  );
};

export default PhotoNumbChanger