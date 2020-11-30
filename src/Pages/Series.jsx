import "../Styles/Pages/series.css"
import series from "../Services/dados"
import Sidebar from "../Components/Sidebar"
import { useEffect, useState } from "react"

const Series = () => {
  const [busca, setBusca] = useState("");
  const [filtroSeries, setFiltroSeries] = useState([]);

  useEffect(()=>{
     setFiltroSeries(
         series.filter(serie =>{
             return serie.nome.includes(busca)
          })
     );
  },[busca]);

    return (
        <>
          <Sidebar/>

          <div id="container-busca">
           <h2 className="container-busca__titulo"></h2>
           <input className="container-busca__input"
             type="text"
             placeholder="digite aqui o título que deseja buscar"
             onChange={e=>{setBusca(e.target.value);}}
             />

          </div>

          <div id="container">
            {
              filtroSeries.map (serie=>{
                 return (
                 <div key={serie.id} className="card">
                  <h3>Título: {serie.nome}</h3>
                  <p>{serie.genero}</p>
                  <img src={serie.imagem} alt="Imagem referente a série descrita acima."/>
                  <p>Sinopse: {serie.descrição}</p>
                 </div>
                 )
                
                })
            }
          </div>



        </>
    )
}

export default Series