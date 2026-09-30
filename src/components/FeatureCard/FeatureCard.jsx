function formatReleaseDate(releaseDate) {
    if (!releaseDate) {
        return 'Fecha no disponible'
    }

    const [year, month, day] = releaseDate.split('-')

    const date = new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
    )

    if (Number.isNaN(date.getTime())) {
        return 'Fecha no disponible'
    }

    return date.toLocaleDateString('es-MX', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}

function FeatureCard({ image, title, releaseDate}) {
    return(
        <article className="c-feature-card">
            <img
            className="c-feature-card__image" 
            src={image}
            alt={`Póster de ${title}`}
            loading="lazy"
            />
            <div className="c-feature-card__body">
                <h3 className="c-feature-card__title">{title}</h3>
                <time className="c-feature-card__date" dateTime={releaseDate || ''}>
                    {formatReleaseDate(releaseDate)}
                </time>
            </div>
        </article>
    )
}

export default FeatureCard