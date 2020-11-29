import "../Styles/Components/sidebar.css"
import { useHistory } from "react-router-dom"

const Sidebar2 = () => {
    const history = useHistory();
    
    return (
        <aside className="app-sidebar">
           <footer>
             <button class="button-sidebar" onClick={()=>history.push("/")}>home</button>
             <button class="button-sidebar" onClick={()=>history.push("/series")}>séries</button>
           </footer>
        </aside>
    )
}

export default Sidebar2