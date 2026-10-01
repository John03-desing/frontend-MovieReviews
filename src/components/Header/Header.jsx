import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Header() {
    const { user } = useAuth()

    const isAdmin = user?.role === 'admin'

    return(
        <header className="c-header">
            <div className="o-container c-header__inner">
                <Link
                    className="c-header__logo"
                    to={isAdmin ? '/admin' : '/inicio'}
                >
                    <img className='c-header__logo-image' src="/icono.png" alt="" aria-hidden="true" />
                    MovieReviews
                </Link>

                {/*navegacion*/}
                {!isAdmin && (
                    <nav className="c-header__nav">
                        <ul className="c-header__list">
                            <li className="c-header__item">
                                <Link className="c-header__link" to="/inicio">
                                    Inicio
                                </Link>
                            </li>

                            <li className="c-header__item">
                                <Link className="c-header__link" to="/inicio#reviews">
                                    Reseñas
                                </Link>
                            </li>

                            <li className="c-header__item">
                                <Link className="c-header__link" to="/inicio#favoritos">
                                    Favoritos
                                </Link>
                            </li>

                            <li className="c-header__item">
                                <Link className="c-header__link" to="/inicio#actores">
                                    Actores Destacados
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header