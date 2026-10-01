function Card({
  image,
  category,
  title,
  description,
  rating,
  username,
  onViewMore
}) {
  return (
    <article className="c-card">
      <img
        src={image}
        alt={`Póster de ${title}`}
        className="c-card__image"
        loading="lazy"
      />

      <span className="c-card__category">
        {category}
      </span>

      <h3 className="c-card__title">
        {title}
      </h3>

      <p className="c-card__rating">
        ★ {rating}/10
      </p>

      <p className="c-card__description">
        {description}
      </p>

      {username && (
        <p className="c-card__author">
          Por {username}
        </p>
      )}

      <footer className="c-card__footer">
        <button
          className="c-card__button"
          type="button"
          onClick={onViewMore}
        >
          Ver más
        </button>
      </footer>
    </article>
  )
}

export default Card