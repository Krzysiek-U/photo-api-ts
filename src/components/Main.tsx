import {useState, useEffect}  from 'react';
import Photo from './Photo';
import NextPrev from './NextPrev';
import PhotoNumbChanger from './PhotoNumbChanger';
import Banner from './Banner';
 
interface MainProps {
  pageCfg: { page: number, limit: number};
  pageContrast: boolean;
  pageConfig: ( pageNumber: number, limitNumber: number ) => void;
}

function  Main( props: MainProps )  {

    const [error, setError] = useState('');
    const [isLoading, setIsLoaded] = useState(true);
    const [newTab, setNewTab] = useState([]);
    const [page, setPage] = useState(props.pageCfg.page);
    const [limit, setLimit] = useState(props.pageCfg.limit);
    const maxPhotoNumb = 900;
    
    useEffect(() => {
      fetch( `https://picsum.photos/v2/list?page=${ page }&limit=${ limit }` ).then((response) => {
          if (response.ok) {
              return response.json();
          } else {
              throw setError(`Error! status: ${response.status}`);
          }
      }).then((data) => {
        setIsLoaded(false);
        setNewTab(data);
      }).catch((error) => {
        setIsLoaded(false);
      })
      .catch(err => console.log(err));
    }, [page, limit])   
    
    useEffect(() => {
      props.pageConfig(page, limit);
    }, [page, limit])   
    

    const changePage  = (pageTemp:string) => {    
      if (pageTemp === 'prev' && page > 1) setPage(page-1) 
      else if  (pageTemp === 'next' && page < maxPhotoNumb/limit) setPage(page+1) 
    }    

    const changePhotoNumb  = (photoNumb:number) => {  
      setLimit(photoNumb) ; 
    }

    if (limit * page > maxPhotoNumb ) {
      setPage(maxPhotoNumb/limit)
    }

    const photoList = newTab.map((photo, index) => {
      return <Photo key={index} photo={photo}  pageContrast={props.pageContrast} />;
    })   

    return (        
      <main>
        <Banner  pageContrast={props.pageContrast} />
        <div id='photoNav' className='photo-nav row'>          
          <NextPrev page={page} limit={limit} maxPhotoNumb={maxPhotoNumb} changePage={changePage} />
          <PhotoNumbChanger limit={limit} changePhotoNumb={changePhotoNumb} />
        </div>
        <div className="row photo-table-container contrast">
          {isLoading ? <div className='container-loader'><div className="loader"></div></div>  : ''}        
          {!error ? <div> { photoList } </div> : <div className='container-error'><div className="error">{error}</div></div>}
        </div>
      </main>
    )
}
 
export default Main