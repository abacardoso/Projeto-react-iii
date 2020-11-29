import "../Styles/Pages/sobre.css"
import Sidebar2 from "../Components/Sidebar2"
import ImagemPerfil from "../Assets/fotoPerfil.jpg"

const Sobre = () => {
    return (
        <>
          <Sidebar2/>
          <div id="page-sobre">

            <div className="container-sobre">
            <img src={ImagemPerfil} alt="Foto da autora"/>
            <p>Olá, meu nome é Anna Beatriz e utilizei esse espaço para compartilhar algumas das minhas séries favoritas, com o intúito de ajudar você que passa 4 horas scrolling as séries nos canais de streaming e não decide o que vai assistir. De nada :)</p>
            </div>

            <div className="container-links">
            <h4>Onde mais me encontrar:</h4>
            <ul>
              <a class="autora__link" href="https://www.linkedin.com/in/anna-beatriz-cardoso-84ab5ab6/" target="blank">
                Linkedin </a>
            </ul>
            
            <ul>
            <a class="autora__link" href="https://www.instagram.com/abacardoso/?hl=pt-br" target="blank">
                Instagram </a>
            </ul>

            <ul>
            <a class="autora__link" href="https://www.facebook.com/abacardoso/" target="blank">
              Facebook</a>

            </ul>

            </div>

          </div>
         
        </>
    )
}

export default Sobre