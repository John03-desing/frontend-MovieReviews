import { useEffect } from 'react'
import { FiX, FiStar } from 'react-icons/fi'

function ReviewModal({
  open,
  review,
  onClose
}) {
  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow =
        previousOverflow

      window.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }
  }, [open, onClose])

  if (!open || !review) {
    return null
  }

  return (
    <div
      className="c-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
    >
      <div
        className="c-modal__backdrop"
        onClick={onClose}
      />

      <article className="c-modal__panel c-modal__panel--review">
        <button
          className="c-review-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar reseña"
        >
          <FiX aria-hidden="true" />
        </button>

        <header className="c-review-modal__header">
          <h2
            id="review-modal-title"
            className="c-review-modal__title"
          >
            {review.movie.title}
          </h2>
        </header>

        <div className="c-review-modal__rating">
          <FiStar
            className="c-review-modal__star"
            aria-hidden="true"
          />

          <strong>
            {review.rating}/10
          </strong>
        </div>

        <div className="c-review-modal__content">
          <h3 className="c-review-modal__subtitle">
            Reseña
          </h3>

          <p className="c-review-modal__text">
            {review.comment}
          </p>
        </div>

        <footer className="c-review-modal__footer">
          <span className="c-review-modal__author-label">
            Escrito por
          </span>

          <span className="c-review-modal__author">
            {review.user?.username || 'Usuario'}
          </span>
        </footer>
      </article>
    </div>
  )
}

export default ReviewModal