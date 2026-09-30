function PersonCard({ image, name, role, featured = false }) {
  return (
    <article className={`c-person-card${featured ? ' c-person-card--featured' : ''}`}>
      <img className="c-person-card__avatar" src={image} alt={`Fotografía de ${name}`} loading="lazy" />
      <h3 className="c-person-card__name">{name}</h3>
      <p className="c-person-card__role">{role}</p>
    </article>
  )
}

export default PersonCard