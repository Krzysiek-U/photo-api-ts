
import Banner from './Banner';

const About = () => {  
    return (
    <div className="about contrast">
      <Banner />
      <div className='about-txt'>
        <p className="leading-loose">API: Lorem Picsum The Lorem Ipsum for photos.</p>
        <img
          alt = { `Losowe zdjęcie` }
          className='photo'
          src={ `https://picsum.photos/800/500` }>                      
        </img>
      </div>
    </div>
  );
};

export default About


