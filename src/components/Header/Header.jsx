function Header() {
    return(
        <header className="c-header">
            <div className="o-container c-header__inner">
                {/*logo de la app*/}
                <div className="c-header__logo">MovieReviews</div>
                {/*navegacion*/}
                <nav className="c-header__nav">
                    <ul className="c-header__list">
                        <li className="c-header__item"><a className="c-header__link" href="#inicio">Inicio</a></li>
                        <li className="c-header__item"><a className="c-header__link" href="#reviews">Reseñas</a></li>
                        <li className="c-header__item"><a className="c-header__link" href="#estrenos">Estrenos</a></li>
                        <li className="c-header__item"><a className="c-header__link" href="#actores">Actores Destacados</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header