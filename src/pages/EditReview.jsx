import { useNavigate, useParams } from 'react-router-dom'
import Section from '../components/Section/Section'
import ReviewForm from '../components/ReviewForm/ReviewForm'
import { useReviews } from '../hooks/useReviews'

function EditReview() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getReview, updateReview } = useReviews()
  const review = getReview(id)

  const handleSubmit = (values) => {
    updateReview(id, values)
    navigate('/mis-reviews')
  }

  return (
    <main>
      <Section id="editar-resena" title="Editar reseña" layout="o-grid--1">
        {review ? (
          <ReviewForm
            key={review.id}
            initialValues={review}
            submitLabel="Guardar cambios"
            onSubmit={handleSubmit}
            onCancel={() => navigate('/mis-reviews')}
          />
        ) : (
          <p className="c-status-message">Reseña no encontrada.</p>
        )}
      </Section>
    </main>
  )
}

export default EditReview