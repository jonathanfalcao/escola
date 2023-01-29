import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Colégio 24 de Maio</h1>
            <div className="links">
                <Link to='/'>Início</Link>
                <Link to='/NewPost'>Adicionar pessoas</Link>
            </div>
        </nav>    
    );
}
 
export default Navbar;