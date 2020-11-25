import "../Styles/Components/sidebar.css"
import { useHistory } from "react-router-dom"

const Sidebar = () => {
    const history = useHistory();
    
    return (
        <aside className="app-sidebar">
           <footer>
             <button class="button-sidebar" onClick={()=>history.push("/")}>home</button>
             <button class="button-sidebar" onClick={()=>history.push("/sobre")}>sobre</button>
           </footer>
        </aside>
    )
}

export default Sidebar