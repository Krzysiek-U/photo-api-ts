import { Link } from "react-router-dom";

interface PhotoProps {
  photo: { id: number, author: string };
}

const Photo = ( props: PhotoProps ) => {

  return (    
    <div className='photo-container contrast'>
      <Link
        className='link photo'
        to={`/photo/?id=${props.photo.id}&autor=${props.photo.author}`}
        title= { `Przejdź do zdjęcia o numerze ${props.photo.id}, autor zdjęcia: ${props.photo.author}` }
        >
          <img
            alt = { `Zdjęcie o numerze ${props.photo.id}, autor zdjęcia: ${props.photo.author}` }
            className='photo'
            src={ `https://picsum.photos/id/${props.photo.id}/300/200/` }>                      
          </img>
          <div className='contrast photo title'>{props.photo.author}</div>
        </Link>      
    </div>
  );
};

export default Photo;