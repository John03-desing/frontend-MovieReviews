import { useNavigate } from 'react-router-dom'
import ReviewForm from '../components/ReviewForm/ReviewForm'
import { createReview } from '../services/review.service'
import { useAuth } from '../context/AuthContext'

function CreateReview() {
    const navigate = useNavigate()
    const { token } = useAuth()
    const handleSubmit = async (values) => {

        try {
            await createReview( values, token )
            navigate('/inicio', {
                replace: true
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <section className="c-create-review">
            <div className="o-container c-create-review__container">
                <h1 className="c-create-review__title">
                    Nueva reseña
                </h1>

                <ReviewForm
                    onSubmit={handleSubmit}
                    onCancel={() => navigate('/inicio')}
                />
            </div>
        </section>
    )
}

export default CreateReview