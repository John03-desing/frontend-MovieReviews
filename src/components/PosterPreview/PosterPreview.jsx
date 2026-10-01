import { FiImage } from 'react-icons/fi'

function PosterPreview({ movie }) {
  const src = movie?.posterUrl
  const title = movie?.title
  const year = movie?.year

  return (
    <aside
      className="c-poster-preview"
      aria-label="Vista previa del cartel"
    >
      <div className="c-poster-preview__frame">
        {src ? (
          <img
            className="c-poster-preview__image"
            src={src}
            alt={
              title
                ? `Cartel de ${title}`
                : 'Cartel de la película'
            }
          />
        ) : (
          <p className="c-poster-preview__placeholder">
            <FiImage aria-hidden="true" />
            Aquí aparecerá el cartel
          </p>
        )}
      </div>

      <dl className="c-poster-preview__details">
        <dt className="c-poster-preview__term">
          Película
        </dt>

        <dd className="c-poster-preview__value">
          {title || 'Sin seleccionar'}
        </dd>

        <dt className="c-poster-preview__term">
          Año de estreno
        </dt>

        <dd className="c-poster-preview__value">
          {year || '—'}
        </dd>
      </dl>
    </aside>
  )
}

export default PosterPreview