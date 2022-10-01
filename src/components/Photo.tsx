import { Link } from "react-router-dom";

interface PhotoProps {
  photo: { id: number, author: string };
}

const Photo = ( props: PhotoProps ) => {

  return (    
    <div className='photo-container contrast'>
      <Link to={`/photo/?id=${props.photo.id}&autor=${props.photo.author}`}>

        <img
          alt = { `Zdjęcie o numerze ${props.photo.id}, autor zdjęcia: ${props.photo.author}` }
          className='photo'
          src={ `https://picsum.photos/id/${props.photo.id}/300/200/` }>                      
        </img>
        </Link>
      <h2 className='contrast'>{props.photo.author}</h2>
    </div>
  );
};

export default Photo;