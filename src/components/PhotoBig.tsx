import { Link, useSearchParams  } from "react-router-dom";

const Photo = () => {

  const [searchParams] = useSearchParams();

  return (    
    <div className='photo-container-big contrast'>
      <Link to={`/photo-api-ts/`}>
        <span className='big-photo-link'><i className="fa fa-chevron-left"></i>  powrót na stronę galerii</span>
        <h1 className='contrast '><span>Autor zdjęcia: </span> {searchParams.get('autor')} </h1>
        <img
          alt = { `Zdjęcie autorstwa ${searchParams.get('autor')} o numerze ${searchParams.get('id')}` }
          className='photo'
          src={ `https://picsum.photos/id/${searchParams.get('id')}/800` }>                      
        </img>
      </Link>      
    </div>
  );
};

export default Photo;