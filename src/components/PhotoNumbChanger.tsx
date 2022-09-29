interface PhotoNumbChangerProps {
  changePhotoNumb: ( photoNumb:number ) => void;
  limit: number;
}
 
const PhotoNumbChanger = (props:PhotoNumbChangerProps) => { 

  const activeLink = (limit: number) => {
    return ( 
      <a id={`photoNumb_${limit}`} title={`zmień ilość wyświetlanych zdjęć na stronie na ${limit}`}
             className= { props.limit === limit ? `a-button active photoNumb-${limit} ` : `a-button photoNumb-${limit} `  }   
             role="button"
             onClick={ () =>  props.changePhotoNumb(limit) }>{limit}</a>
     );
  }
    
    return (
      <div id='changingPhotoNumb' className='changing-photo-numb contrast'>
        <div className='changing-photo-numb-container'>
          <span>Zmień ilość zdjęć na stronie </span>
          {activeLink(20)}
          {activeLink(30)}
          {activeLink(50)}
          {activeLink(100)}
        </div>
      </div>
  );
};

export default PhotoNumbChanger