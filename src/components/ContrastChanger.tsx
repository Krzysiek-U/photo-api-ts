const ContrastChanger = () => {  

  const changeContrast  = () => {  
      let classElements = document.getElementsByClassName('contrast');
      if(classElements){
        for(var i = 0; i < classElements.length; i++) {
            classElements[i].classList.toggle("contrast-on");
          }
      }
  }

    return (
      <span id='changeContrastContener'>
        <a id='changeContrast' title='Zmnień kontrast' className='contrastChange' href="#" onClick={ () =>  changeContrast()  }><i className="fa fa-adjust"></i></a>
      </span>
  );
};

export default ContrastChanger