function Header() {
    return(
        <header className="c-header">
            <div className="o-container c-header__inner">
                {/*logo de la app*/}
                <div className="c-header__logo">MovieReviews</div>
                {/*navegacion*/}
                <nav className="c-header__nav">
                    <ul className="c-header_list">
                        <li className="c-header__item"><a href="/">Inicio</a></li>
                        <li className="c-header__item"><a href="">Reseñas</a></li>
                        <li className="c-header__item"><a href="">Estrenos</a></li>
                        <li className="c-header__item"><a href="">Actores Destacados</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header