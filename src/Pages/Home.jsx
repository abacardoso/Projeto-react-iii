import "../Styles/Pages/home.css"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
              <main>
                <h1>É hora de maratonar</h1>
                <p>Dicas de séries para melhorar aquele domingo tedioso, by Anna Beatriz</p>
            
            </main>
              <Link to= "/series" class="enter-app">séries</Link>
              <Link to= "/sobre" class="enter-app">sobre</Link>              
            </div>

        </div>
    )
}

export default Home