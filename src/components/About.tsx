import Banner from './Banner';

interface AboutProps {
  pageContrast: boolean;
}

const About = (props: AboutProps) => {  
    return (
    <div className="about contrast">
      <Banner  pageContrast={props.pageContrast} />
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