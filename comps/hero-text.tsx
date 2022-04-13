const HeroText = () =>{
    return(
        <div>
            <h2 className="c-2 title">Disfruta de la <br/> <span className="c-1"> mejor musica</span></h2>
            <p className="c-2 parr">Accede a tu cuenta para guardar tus albumes favoritos</p>
            <div className="link-container">
                <p className="c-2" >Contacta</p>
                <svg className="link-vector" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L17 8L10 15M1 8H17H1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default HeroText;
