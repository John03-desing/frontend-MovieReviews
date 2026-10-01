import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiList, FiPlus, FiFilter, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import Hero from '../components/Hero/Hero'
import Section from '../components/Section/Section'
import Card from '../components/Card/Card'
import GalleryItem from '../components/GalleryItem/GalleryItem'
import PersonCard from '../components/PersonCard/PersonCard'
import Button from '../components/Button/Button'

import { getFeaturedPeople } from '../services/people.service'
import { getReviews } from '../services/review.service'
import { getGenres } from '../services/movie.service'

import { useAuth } from '../context/AuthContext'
import FavoriteModal from '../components/FavoriteModal/FavoriteModal'
import ConfirmModal from '../components/ConfirmModal/ConfirmModal'
import { getFavorites, addFavorite, removeFavorite } from '../services/favorite.service'

import ReviewModal from '../components/ReviewModal/ReviewModal'

function Home() {
  const navigate = useNavigate()

  const [people, setPeople] = useState([])
  const [peopleLoading, setPeopleLoading] = useState(true)
  const [peopleError, setPeopleError] = useState('')

  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(true)
  const [reviewsError, setReviewsError] = useState('')
  const [selectedReview, setSelectedReview] = useState(null)

  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [genreMenuOpen, setGenreMenuOpen] = useState(false)

  const REVIEWS_PER_PAGE = 6
  const [currentPage, setCurrentPage] = useState(1)

  const { token } = useAuth()

  const [favorites, setFavorites] = useState([])
  const [favoritesLoading, setFavoritesLoading] = useState(true)
  const [favoriteModalOpen, setFavoriteModalOpen] = useState(false)
  const [favoriteToDelete, setFavoriteToDelete] = useState(null)
  const [deletingFavorite, setDeletingFavorite] = useState(false)
  

  useEffect(() => {
    const loadPeople = async () => {
      try {
        setPeopleError('')

        const data = await getFeaturedPeople()

        setPeople(data)
      } catch (error) {
        setPeopleError(error.message)
      } finally {
        setPeopleLoading(false)
      }
    }

    loadPeople()
  }, [])

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await getGenres()

        setGenres(data)
      } catch (error) {
        console.error(
          'Error al obtener los géneros:',
          error
        )
      }
    }

    loadGenres()
  }, [])

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setReviewsLoading(true)
        setReviewsError('')

        const data = await getReviews(selectedGenre)

        setReviews(data)
        setCurrentPage(1)
      } catch (error) {
        setReviewsError(error.message)
      } finally {
        setReviewsLoading(false)
      }
    }

    loadReviews()
  }, [selectedGenre])

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        setFavoritesLoading(true)

        const data = await getFavorites(token)

        setFavorites(data)
      } catch (error) {
        console.error(
          'Error cargando favoritos:',
          error
        )
      } finally {
        setFavoritesLoading(false)
      }
    }

    if (token) {
      loadFavorites()
    }
  }, [token])

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE)
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE
  const displayedReviews = reviews.slice(startIndex, startIndex + REVIEWS_PER_PAGE)

  const selectedGenreName = genres.find(
    genre => genre.id === selectedGenre
  )?.name

  const refreshFavorites = async () => {
    const data = await getFavorites(token)

    setFavorites(data)
  }

  const handleAddFavorite = async (movie) => {
    await addFavorite(
      movie.id,
      token
    )

    await refreshFavorites()
  }

  const handleDeleteFavorite = async () => {
    if (!favoriteToDelete) {
      return
    }

    try {
      setDeletingFavorite(true)

      await removeFavorite(
        favoriteToDelete.movie.id,
        token
      )

      await refreshFavorites()

      setFavoriteToDelete(null)
    } catch (error) {
      console.error(
        'Error al eliminar favorito:',
        error
      )
    } finally {
      setDeletingFavorite(false)
    }
  }

  const favoriteSlots = Array.from(
    { length: 4 },
    (_, index) => favorites[index] || null
  )

  return (
    <>
      <Hero />

      <main>
        <Section
          id="reviews"
          title="Reseñas"
          layout="o-grid--3"
          actions={
            <>
              <Button
                icon={FiPlus}
                onClick={() => navigate('/reviews/nueva')}
              >
                Crear reseña
              </Button>

              <Button
                variant="secondary"
                icon={FiList}
                onClick={() => navigate('/mis-reviews')}
              >
                Mis reseñas
              </Button>

              <div className="c-genre-filter">
                <Button
                  variant="secondary"
                  icon={FiFilter}
                  onClick={() =>
                    setGenreMenuOpen(
                      current => !current
                    )
                  }
                >
                  {selectedGenreName || 'Género'}
                </Button>

                {genreMenuOpen && (
                  <div className="c-genre-filter__menu">
                    <button
                      className="c-genre-filter__option"
                      type="button"
                      onClick={() => {
                        setSelectedGenre(null)
                        setGenreMenuOpen(false)
                      }}
                    >
                      Todos
                    </button>

                    {genres.map(genre => (
                      <button
                        key={genre.id}
                        className="c-genre-filter__option"
                        type="button"
                        onClick={() => {
                          setSelectedGenre(genre.id)
                          setGenreMenuOpen(false)
                        }}
                      >
                        {genre.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          }
        >
          {reviewsLoading && (
            <p>Cargando reseñas...</p>
          )}

          {reviewsError && (
            <p className="c-reviews__error">
              {reviewsError}
            </p>
          )}

          {!reviewsLoading &&
            !reviewsError &&
            displayedReviews.length === 0 && (
              <p>
                No hay reseñas disponibles.
              </p>
            )}

          {!reviewsLoading &&
            !reviewsError &&
            displayedReviews.map(review => (
              <Card
                key={review.id}
                image={review.movie.posterUrl}
                title={review.movie.title}
                category={
                  review.movie.genres?.length
                    ? review.movie.genres
                        .map(genre => genre.name)
                        .join(', ')
                    : 'Sin género'
                }
                description={review.comment}
                rating={review.rating}
                username={review.user?.username}
                reviewId={review.id}
                onViewMore={() => setSelectedReview(review)
                }
              />
            ))
          }

          {/* Paginacion de las reseñas existentes */}
          {!reviewsLoading &&
            !reviewsError &&
            totalPages > 1 && (
              <nav
                className="c-pagination"
                aria-label="Paginación de reseñas"
              >
                <button
                  className="c-pagination__button"
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage(page => page - 1)
                  }
                  aria-label="Página anterior"
                >
                  <FiChevronLeft aria-hidden="true" />
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map(page => (
                  <button
                    key={page}
                    className={
                      `c-pagination__button${
                        currentPage === page
                          ? ' c-pagination__button--active'
                          : ''
                      }`
                    }
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    aria-current={
                      currentPage === page
                        ? 'page'
                        : undefined
                    }
                  >
                    {page}
                  </button>
                ))}

                <button
                  className="c-pagination__button"
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage(page => page + 1)
                  }
                  aria-label="Página siguiente"
                >
                  <FiChevronRight aria-hidden="true" />
                </button>
              </nav>
            )
          }
        </Section>

        <Section
          id="favoritos"
          title="Favoritos"
          layout="o-grid--4 o-grid--favorites"
        >
          {favoritesLoading ? (
            <p>Cargando favoritos...</p>
          ) : (
            favoriteSlots.map((favorite, index) => (
              <GalleryItem
                key={
                  favorite
                    ? favorite.id
                    : `empty-${index}`
                }
                image={favorite?.movie.posterUrl}
                title={favorite?.movie.title}
                onAdd={() =>
                  setFavoriteModalOpen(true)
                }
                onDelete={() =>
                  setFavoriteToDelete(favorite)
                }
              />
            ))
          )}
        </Section>

        <Section
          id="actores"
          title="Actores destacados"
          layout="o-grid--center"
        >
          {peopleLoading && (
            <p>
              Cargando actores destacados...
            </p>
          )}

          {peopleError && (
            <p>{peopleError}</p>
          )}

          {!peopleLoading &&
            !peopleError &&
            people.map(person => (
              <PersonCard
                key={person.id}
                {...person}
              />
            ))
          }
        </Section>
      </main>

      <ReviewModal
        open={Boolean(selectedReview)}
        review={selectedReview}
        onClose={() =>
          setSelectedReview(null)
        }
      />

      <FavoriteModal
        open={favoriteModalOpen}
        onClose={() =>
          setFavoriteModalOpen(false)
        }
        onSave={handleAddFavorite}
      />

      <ConfirmModal
        open={Boolean(favoriteToDelete)}
        title="Eliminar favorito"
        message={
          favoriteToDelete
            ? `¿Seguro que deseas eliminar "${favoriteToDelete.movie.title}" de favoritos?`
            : ''
        }
        loading={deletingFavorite}
        onCancel={() =>
          setFavoriteToDelete(null)
        }
        onConfirm={handleDeleteFavorite}
      />
    </>
  )
}

export default Home