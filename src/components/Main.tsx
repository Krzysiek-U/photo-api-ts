import {useState, useEffect}  from 'react';
import Photo from './Photo';
import NextPrev from './NextPrev';
import PhotoNumbChanger from './PhotoNumbChanger';
import Banner from './Banner';
 
function  Main()  {

    const [error, setError] = useState('');
    const [isLoading, setIsLoaded] = useState(true);
    const [newTab, setNewTab] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(30);
    
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
    }, [page, limit])    

    const changePage  = (pageTemp:string) => {    
      if (pageTemp === 'prev' && page > 1) setPage(page-1) 
      else if  (pageTemp === 'next' && page < 900/limit) setPage(page+1) 
    }    

    const changePhotoNumb  = (photoNumb:number) => {    
      setLimit(photoNumb) 
    }

    const photoList = newTab.map((photo, index) => {
      return <Photo key={index} photo={photo} />;
    })   

    return (        
      <main>
        <Banner/>
        <div id='photoNav' className='photo-nav'>          
          <NextPrev page={page} changePage={changePage} />
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