interface NextPrevProps {
  changePage: ( pageTemp: string ) => void;
  page: number;
}

const NextPrev = ( props: NextPrevProps ) => {  
    return (
      <div id='nextPrevtContener' className='next-prev contrast'>
        <div className='next-prev-container'>
          <a id='prevPhotos' title='Poprzednie zdjęcia' className='prev' href="#" onClick={ () =>  props.changePage('prev') }><i className="fa fa-chevron-left"></i> Poprzednie</a>
          <span>{props.page}</span>
          <a id='nextPhotos' title='Następne zdjęcia' className='next' href="#" onClick={ () =>  props.changePage('next') }>Następne <i className="fa fa-chevron-right"></i></a>
        </div>
      </div>
  );
};

export default NextPrev