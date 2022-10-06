const SiteNavMenu = () => {  
    return (
    <div className="flex justify-center contrast">
      <div>
        <p className="leading-loose"><i className="fa fa-copyright"></i>
          <a href='mailto:krzysiek@galeria.net.pl'title= { `Wyślij e-mail na adres: krzysiek@galeria.net.pl` }>Krzysztof Urbankiewicz</a>
        </p>
        <p className="leading-loose">API: 
          <a href='https://picsum.photos/' title= { `Link do Lorem Picsum` }>Lorem Picsum</a>
        </p>   
      </div>
    </div>
  );
};

export default SiteNavMenu