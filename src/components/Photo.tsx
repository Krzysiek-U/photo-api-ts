import {useState, useEffect}  from 'react';
import { Link } from "react-router-dom";

interface PhotoProps {
  photo: { id: number, author: string };
  pageContrast: boolean;
}

const Photo = ( props: PhotoProps ) => {
  
  useEffect(() => { 
    let classElements = document.getElementsByClassName('contrast-photo');
    if(classElements){
      for(var i = 0; i < classElements.length; i++) {
       props.pageContrast ? classElements[i].classList.add("contrast-on") : classElements[i].classList.remove("contrast-on");
        }
    }
  }, [props.pageContrast])   

  return (    
    <div className='photo-container contrast-photo'>
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
          <div className='contrast-photo photo title'>{props.photo.author}</div>
        </Link>      
    </div>
  );
};

export default Photo;