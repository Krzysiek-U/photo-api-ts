import { Link, useSearchParams  } from "react-router-dom";

const Photo = () => {

  const [searchParams] = useSearchParams();

  return (    
    <div className='container-photo-big contrast'>
      <Link
        className='link back'
        to={`/`}
        title= { `Powrót na stronę galerii` }
      >
        <span className='photo-big-link'><i className="fa fa-chevron-left"></i>  powrót na stronę galerii</span>
      </Link>  
      <h1 className='contrast photo-big'><span>Autor zdjęcia: </span> {searchParams.get('autor')} </h1>
      <img
        alt = { `Zdjęcie autorstwa ${searchParams.get('autor')} o numerze ${searchParams.get('id')}` }
        className='photo'
        src={ `https://picsum.photos/id/${searchParams.get('id')}/800` }>                      
      </img>    
    </div>
  );
};

export default Photo;