import {useState, useEffect}  from 'react';

interface BannerProps {
  pageContrast: boolean;
}


const Banner = (props: BannerProps) => {  

  useEffect(() => { 
    console.log('contrast change effect '+props.pageContrast);
    let classElements = document.getElementsByClassName('contrast-banner');
    if(classElements){
      for(var i = 0; i < classElements.length; i++) {
       props.pageContrast ? classElements[i].classList.add("contrast-on") : classElements[i].classList.remove("contrast-on");
      }
    }
  }, [props.pageContrast])   

    return (
      <div className='banner contrast-banner'>
        <h1 className='contrast-banner'> Galeria zdjęć</h1>
      </div>
  );
};

export default Banner