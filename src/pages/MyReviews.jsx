import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import Section from '../components/Section/Section'
import Button from '../components/Button/Button'
import ReviewItem from '../components/ReviewItem/ReviewItem'
import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog'
import { useAuth } from '../context/AuthContext'
import {
  getMyReviews,
  deleteReview as deleteReviewRequest
} from '../services/review.service'

function MyReviews() {
  const navigate = useNavigate()
  const { token } = useAuth()
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [pendingDelete, setPendingDelete] = useState(null)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true)
        setError('')

        const data = await getMyReviews(token)

        const normalizedReviews = data.map((review) => ({
          ...review,
          title: review.movie?.title ?? review.title ?? '',
          content: review.comment ?? review.content ?? '',
          comment: review.comment ?? review.content ?? '',
          date:
            review.updatedAt ??
            review.createdAt ??
            review.date,
          movie: review.movie ?? null
        }))

        setReviews(normalizedReviews)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      loadReviews()
    }
  }, [token])

  const handleConfirmDelete = async () => {
    if (!pendingDelete) {
      return
    }

    try {
      setError('')

      await deleteReviewRequest(
        pendingDelete.id,
        token
      )

      setReviews(currentReviews =>
        currentReviews.filter(
          review =>
            review.id !== pendingDelete.id
        )
      )

      setPendingDelete(null)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <main>
      <Section
        id="mis-reviews"
        title="Mis reseñas"
        layout="o-grid--1"
        actions={
          <Button icon={FiPlus} onClick={() => navigate('/reviews/nueva')}>Crear reseña</Button>
        }
      >
        {loading ? (
          <p className="c-status-message">Cargando reseñas...</p>
        ) : error ? (
          <p className="c-status-message">{error}</p>
        ) : reviews.length === 0 ? (
          <p className="c-status-message">Aún no has escrito ninguna reseña.</p>
        ) : (
          <ul className="c-review-list">
            {reviews.map((review) => (
              <li key={review.id}>
                <ReviewItem review={review} onDelete={() => setPendingDelete(review)} />
              </li>
            ))}
          </ul>
        )}
      </Section>

      <ConfirmDialog
        isOpen={pendingDelete !== null}
        title="¿Eliminar reseña?"
        message={`Se eliminará la reseña de "${pendingDelete?.title ?? ''}". Esta acción no se puede deshacer.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </main>
  )
}

export default MyReviews