import { useEffect, useState } from 'react'
import Section from '../components/Section/Section'
import ReviewItem from '../components/ReviewItem/ReviewItem'
import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog'
import { useAuth } from '../context/AuthContext'
import { getAdminReviews, deleteAdminReview } from '../services/admin.service'

function AdminReviews() {
  const { token } = useAuth()
  const [reviews, setReviews] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [pendingDelete, setPendingDelete] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(
      async () => {
        try {
          setLoading(true)
          setError('')

          const data =
            await getAdminReviews(
              search,
              token
            )

          const normalizedReviews =
            data.map((review) => ({
              ...review,
              title:
                review.movie?.title ??
                review.title ??
                '',
              content:
                review.comment ??
                review.content ??
                '',
              comment:
                review.comment ??
                review.content ??
                '',
              date:
                review.updatedAt ??
                review.createdAt ??
                review.date,
              username:
                review.user?.username ??
                '',
              movie:
                review.movie ?? null
            }))

          setReviews(
            normalizedReviews
          )
        } catch (error) {
          setError(
            error.message
          )
        } finally {
          setLoading(false)
        }
      },
      350
    )

    return () =>
      clearTimeout(timeout)
  }, [search, token])

  const handleConfirmDelete = async () => {
    if (!pendingDelete) {
      return
    }

    try {
      setError('')

      await deleteAdminReview(
        pendingDelete.id,
        token
      )

      setReviews(currentReviews =>
        currentReviews.filter(
          review =>
            review.id !==
            pendingDelete.id
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
        id="administrar"
        title="Administrar"
        layout="o-grid--1"
      >
        <div className="c-admin-search">
          <input
            className="c-admin-search__input"
            type="search"
            value={search}
            placeholder="Buscar por nombre de usuario..."
            aria-label="Buscar reseñas por nombre de usuario"
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
          />
        </div>

        {loading ? (
          <p className="c-status-message">
            Cargando reseñas...
          </p>
        ) : error ? (
          <p className="c-status-message">
            {error}
          </p>
        ) : reviews.length === 0 ? (
          <p className="c-status-message">
            No se encontraron reseñas.
          </p>
        ) : (
          <ul className="c-review-list">
            {reviews.map((review) => (
              <li key={review.id}>
                <p className="c-admin-review__user">
                  Usuario: {review.username}
                </p>

                <ReviewItem
                  review={review}
                  showEdit={false}
                  onDelete={() =>
                    setPendingDelete(
                      review
                    )
                  }
                />
              </li>
            ))}
          </ul>
        )}
      </Section>

      <ConfirmDialog
        isOpen={pendingDelete !== null}
        title="¿Eliminar reseña?"
        message={
          `Se eliminará la reseña de "${pendingDelete?.title ?? ''}" publicada por "${pendingDelete?.username ?? ''}". Esta acción no se puede deshacer.`
        }
        onConfirm={handleConfirmDelete}
        onCancel={() =>
          setPendingDelete(null)
        }
      />
    </main>
  )
}

export default AdminReviews