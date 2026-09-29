function FeatureCard({ image, title, releaseDate}) {
    return(
        <article className="c-feature-card">
            <img
            className="c-feature-card__image" 
            src={image}
            alt={'Póster de ${title}'}
            loading="lazy"
            />
            <div className="c-feature-card__body">
                <h3 className="c-feature-card__title">{title}</h3>
                <time className="c-feature-card__date" datetime={releaseDate}>
                    {new Date(releaseDate).toLocaleDateString('es-MX', {
                        day: 'numeric',
                        month:'long',
                    })}
                </time>
            </div>
        </article>
    )
}

export default FeatureCard