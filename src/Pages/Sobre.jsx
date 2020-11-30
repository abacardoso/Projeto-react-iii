import "../Styles/Pages/sobre.css"
import Sidebar2 from "../Components/Sidebar2"
import ImagemPerfil from "../Assets/fotoPerfil.jpg"
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Sobre = () => {
    return (
        <>
          <Sidebar2/>
          
          <main id="page-sobre">

            <div className="container-sobre">
            <img className="sobre__foto" src={ImagemPerfil} alt="Foto da autora"/>
            <p className="sobre__paragrafo" >Olá, meu nome é Anna Beatriz e utilizei esse espaço para compartilhar algumas das minhas séries favoritas, com o intúito de ajudar você que passa 4 horas scrolling as séries nos canais de streaming e não decide o que vai assistir. De nada :)</p>
            </div>

            <div className="container-links">
              <a class="sobre__links" href="https://github.com/abacardoso" target="blank">
              <AiFillGithub size={35} color='rgb(32, 29, 29)'/>
              <h4>Github</h4>
              </a>

              <a class="sobre__links" href="https://www.linkedin.com/in/anna-beatriz-cardoso-84ab5ab6/" target="blank">
              <AiFillLinkedin size={35} color='rgba(32, 29, 29)'/>
              <h4>Linkedin</h4>
              </a>

              <a class="sobre__links" href="https://www.instagram.com/abacardoso/?hl=pt-br" target="blank">
              <AiFillInstagram size={35} color='rgb(32, 29, 29)'/>
              <h4>Instagram</h4>
              </a>

              <a class="sobre__links" href="https://www.facebook.com/abacardoso/" target="blank">
              <AiFillFacebook size={35} color='rgb(32, 29, 29)'/>
              <h4>Facebook</h4>
              </a>
            </div>

          </main>
         
        </>
    )
}

export default Sobre