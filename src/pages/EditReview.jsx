import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Section from '../components/Section/Section'
import ReviewForm from '../components/ReviewForm/ReviewForm'
import { useAuth } from '../context/AuthContext'
import {
  getMyReviewById,
  updateReview as updateReviewRequest
} from '../services/review.service'

function EditReview() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { token } = useAuth()
  const [review, setReview] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadReview = async () => {
      try {
        setLoading(true)
        setError('')

        const data = await getMyReviewById(id, token)

        setReview({
          ...data,
          title: data.movie?.title ?? data.title ?? '',
          content: data.comment ?? data.content ?? '',
          comment: data.comment ?? data.content ?? '',
          movie: data.movie ?? null,
          rating: data.rating ?? 0
        })
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      loadReview()
    }
  }, [id, token])

  const handleSubmit = async (values) => {
    try {
      setError('')

      await updateReviewRequest(id, values, token)

      navigate('/mis-reviews')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <main>
      <Section id="editar-resena" title="Editar reseña" layout="o-grid--1">
        {loading ? (
          <p className="c-status-message">Cargando reseña...</p>
        ) : error && !review ? (
          <p className="c-status-message">{error}</p>
        ) : review ? (
          <>
            {error && (
              <p className="c-status-message">{error}</p>
            )}

            <ReviewForm
              key={review.id}
              initialValues={review}
              submitLabel="Guardar cambios"
              onSubmit={handleSubmit}
              onCancel={() => navigate('/mis-reviews')}
            />
          </>
        ) : (
          <p className="c-status-message">Reseña no encontrada.</p>
        )}
      </Section>
    </main>
  )
}

export default EditReview