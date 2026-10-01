import { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'
import { getMovies } from '../../services/movie.service'

function Hero() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getMovies()
        setMovies(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  const featured = movies.slice(0, 3) // la franja tiene 3 columnas

  return (
    <section className="c-hero" id="inicio">
      <div className="c-hero__banner">
        <div className="o-container c-hero__content">
          <h1 className="c-hero__title">Bienvenido a MovieReviews</h1>
          <p className="c-hero__description">
            Descubre reseñas auténticas y mantente al día con los próximos estrenos.
          </p>
          <a className="c-hero__btn" href="https://cinepolis.com/mx" target='_blank' rel='Noopener noreferrer'>Compra tus boletos aquí</a>

          {loading && <p className="c-hero__status">Cargando próximas películas…</p>}
          {error && <p className="c-hero__status" role="alert">{error}</p>}
        </div>
      </div>

      {featured.length > 0 && (
        <div className="c-hero__upcoming">
          <div className="o-container c-hero__grid">
            {featured.map((movie) => (
              <FeatureCard
                key={movie.id}
                image={movie.posterUrl}
                title={movie.title}
                releaseDate={movie.releaseDate}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero