interface NextPrevProps {
  page: number;
  limit: number;
  maxPhotoNumb: number;
  changePage: ( pageTemp: string ) => void;
}

const NextPrev = ( props: NextPrevProps ) => {  

    return (
      <div id='nextPrevtContener' className='next-prev contrast'>
        <div className='next-prev-container'>
          <button id='prevPhotos' title='Poprzednie zdjęcia' className='a-button prev' onClick={ () =>  props.changePage('prev') }><i className="fa fa-chevron-left"></i> Poprzednie</button>
          <span>{props.page}/ {props.maxPhotoNumb/props.limit }</span>
          <button id='nextPhotos' title='Następne zdjęcia' className='a-button next' onClick={ () =>  props.changePage('next') }>Następne <i className="fa fa-chevron-right"></i></button>
        </div>
      </div>
  );
};

export default NextPrev