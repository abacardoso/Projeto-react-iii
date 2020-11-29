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
           <h1>Busca séries:</h1>
           <input
             type="text"
             placeholder="Digite o título que deseja buscar"
             onChange={e=>{setBusca(e.target.value);}}
             />

          </div>

          <div id="container">
            {
              filtroSeries.map (serie=>{
                 return (
                 <div key={serie.id} className="card">
                  <h3>{serie.nome}</h3>
                  <p>Sinopse: {serie.descrição}</p>
                  <img src={serie.imagem} alt="Imagem referente a série descrita acima."/>
                 </div>
                 )
                
                })
            }
          </div>



        </>
    )
}

export default Series