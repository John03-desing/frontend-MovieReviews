function Card({image, category, title, description}){
    return(
        <article className="c-card">
            <img src={image} alt={title} className="c-card__image" loading="lazy"/>
            <span className="c-card__category">{category}</span>
            <h3 className="c-card__title">{title}</h3>
            <p className="c-card__description">{description}</p>
            <footer className="c-card__footer">
                <button className="c-card__button" type="button">Ver más</button>
            </footer>
        </article>
    )
}

export default Card