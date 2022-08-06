// import { Fragment } from "react";
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={`/`} className="navbar-brand fs-3"> Samay Atelier</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={`/`} className="nav-link" aria-current="page">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/category/Pelicula`} className="nav-link" aria-current="page">Peliculas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/category/Documental`} className="nav-link" aria-current="page">Documentales</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/category/Serie`} className="nav-link" aria-current="page">Series</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/about`} className="nav-link">Nosotros</Link>
                            </li>
                        </ul>
                        <div className="d-flex pe-3">
                            <CartWidget />

                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                <button className="btn btn-outline-light" type="submit">Buscar</button>
                        </form> */}


                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;