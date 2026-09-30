import {Link} from 'react-router-dom'

function Header() {
    return(
        <header className="c-header">
            <div className="o-container c-header__inner">
                {/*logo de la app*/}
                <Link className="c-header__logo" to="/inicio">MovieReviews</Link>
                {/*navegacion*/}
                <nav className="c-header__nav">
                    <ul className="c-header__list">
                        <li className="c-header__item"><Link className="c-header__link" to="/inicio">Inicio</Link></li>
                        <li className="c-header__item"><Link className="c-header__link" to="/inicio#reviews">Reseñas</Link></li>
                        <li className="c-header__item"><Link className="c-header__link" to="/inicio#estrenos">Estrenos</Link></li>
                        <li className="c-header__item"><Link className="c-header__link" to="/inicio#actores">Actores Destacados</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header