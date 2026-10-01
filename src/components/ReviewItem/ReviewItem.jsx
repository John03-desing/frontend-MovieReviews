import { FaStar } from 'react-icons/fa'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import IconButton from '../IconButton/IconButton'

function ReviewItem({
  review,
  onDelete,
  showEdit = true
}) {
  const {
    id,
    title,
    content,
    rating,
    createdAt
  } = review

  const date =
    new Date(createdAt).toLocaleDateString(
      'es-MX',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
    )

  return (
    <article className="c-review-item">
      <div className="c-review-item__body">

        <h3 className="c-review-item__title">
          {title}
        </h3>

        <p className="c-review-item__meta">
          <span className="c-review-item__rating">
            <FaStar
              className="c-review-item__star"
              aria-hidden="true"
            />

            <span className="u-visually-hidden">
              Calificación:
            </span>

            {rating}/10
          </span>

          <time dateTime={createdAt}>
            {date}
          </time>
        </p>

        <p className="c-review-item__excerpt">
          {content}
        </p>

      </div>

      <div className="c-review-item__actions">

        {showEdit && (
          <IconButton
            icon={FiEdit2}
            label={`Editar reseña de ${title}`}
            to={`/reviews/${id}/editar`}
          />
        )}

        <IconButton
          icon={FiTrash2}
          label={`Eliminar reseña de ${title}`}
          variant="danger"
          onClick={onDelete}
        />

      </div>
    </article>
  )
}

export default ReviewItem