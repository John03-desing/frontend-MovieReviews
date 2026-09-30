import { useNavigate } from 'react-router-dom'
import Section from '../components/Section/Section'
import ReviewForm from '../components/ReviewForm/ReviewForm'
import { useReviews } from '../hooks/useReviews'

function CreateReview() {
  const navigate = useNavigate()
  const { addReview } = useReviews()

  const handleSubmit = (values) => {
    addReview(values)
    navigate('/mis-reviews')
  }

  return (
    <main>
      <Section id="nueva-resena" title="Nueva reseña" layout="o-grid--1">
        <ReviewForm onSubmit={handleSubmit} onCancel={() => navigate('/inicio')} />
      </Section>
    </main>
  )
}

export default CreateReview