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
          <a id='prevPhotos' title='Poprzednie zdjęcia' className='a-button prev' role="button" tabIndex={0} onClick={ () =>  props.changePage('prev') }><i className="fa fa-chevron-left"></i> Poprzednie</a>
          <span>{props.page}/ {props.maxPhotoNumb/props.limit }</span>
          <a id='nextPhotos' title='Następne zdjęcia' className='a-button next' role="button" tabIndex={0} onClick={ () =>  props.changePage('next') }>Następne <i className="fa fa-chevron-right"></i></a>
        </div>
      </div>
  );
};

export default NextPrev