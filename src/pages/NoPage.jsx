import { Outlet, Link } from "react-router-dom";
import pacman from './image/pacman2.png'
import './err.css';
const NoPage = () => {
    return (<div className="notFound">
        <div className="titulos"> 
        <h1>4</h1> 
        <h2>4</h2>
        </div>
       

        
        <img src={pacman} alt="" />

        <div className="text-notFound">
            <h2>Not Found</h2>
            <p>Erro de Pagina nao encontrada!</p>
            <Link to="/"><button>Clique para voltar</button></Link>
        </div>
        <Outlet />
    </div>
   );
    
  };
  
  export default NoPage;