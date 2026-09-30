import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import Section from '../components/Section/Section'
import Button from '../components/Button/Button'
import ReviewItem from '../components/ReviewItem/ReviewItem'
import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog'
import { useReviews } from '../hooks/useReviews'

function MyReviews() {
  const navigate = useNavigate()
  const { reviews, deleteReview } = useReviews()
  const [pendingDelete, setPendingDelete] = useState(null)

  const handleConfirmDelete = () => {
    deleteReview(pendingDelete.id)
    setPendingDelete(null)
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
        {reviews.length === 0 ? (
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