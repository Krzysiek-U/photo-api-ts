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
      <span id='contrastContainer' className="contrast-container">
        <button id='changeContrast' title='Zmnień kontrast' className='a-button contrast-change' onClick={ () =>  changeContrast()  }><i className="fa fa-adjust"></i></button>
      </span>
  );
};

export default ContrastChanger