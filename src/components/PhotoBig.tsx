import {useState, useEffect}  from 'react';
import { Link, useSearchParams  } from "react-router-dom";

interface NavProps {
  pageContrast: boolean;
}

const PhotoBig = (props:NavProps) => {

  const [searchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [isLoading, setIsLoaded] = useState(true);
  const [imageBig, setImageBig] = useState('');


  useEffect(() => {
    fetch( `https://picsum.photos/id/${searchParams.get('id')}/800` ).then((response) => {
        if (response.ok) {
            return response.blob();
        } else {
            throw setError(`Error! status: ${response.status}`);
        }
    }).then((image) => {
      setImageBig(URL.createObjectURL(image));
      setIsLoaded(false);
    }).catch((error) => {
      setIsLoaded(false);
    });
  }, [])    

  useEffect(() => { 
    console.log('contrast change effect '+props.pageContrast);
    let classElements = document.getElementsByClassName('contrast-photo-big');
    if(classElements){
      for(var i = 0; i < classElements.length; i++) {
       props.pageContrast ? classElements[i].classList.add("contrast-on") : classElements[i].classList.remove("contrast-on");
        }
    }
  }, [props.pageContrast])   

  const PhotoBigResponse = () => {
    if (isLoading) {
      return  <div className='container-loader'><div className="loader"></div></div>  ;
    } else {
      if (!error ) {
        return (<img
          alt = { `Zdjęcie autorstwa ${searchParams.get('autor')} o numerze ${searchParams.get('id')}` }
          className='photo'
          src={ imageBig }>                      
        </img>  );
      } else {
        return (<div className='container-error'><div className="error">{error}</div></div>);
      }
    }
  }

  return (    
    <div className='container-photo-big contrast-photo-big'>
      <Link
        className='link back'
        to={`/`}
        title= { `Powrót na stronę galerii` }
      >
        <span className='photo-big-link'><i className="fa fa-chevron-left"></i>  powrót na stronę galerii</span>
      </Link>  
      <h1 className='contrast-photo-big photo-big'><span>Autor zdjęcia: </span> {searchParams.get('autor')} </h1>
      <PhotoBigResponse />
    </div>
  );
};

export default PhotoBig;