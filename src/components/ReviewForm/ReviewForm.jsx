import { useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/fi'

import FormField from '../FormField/FormField'
import StarRating from '../StarRating/StarRating'
import PosterPreview from '../PosterPreview/PosterPreview'
import Button from '../Button/Button'

import {
    searchMovies
} from '../../services/movie.service'

function ReviewForm({
    initialValues = null,
    submitLabel = 'Publicar reseña',
    onSubmit,
    onCancel,
}) {
    const [query, setQuery] = useState( initialValues?.movie?.title || '' )
    const [results, setResults] = useState([])
    const [selectedMovie, setSelectedMovie] = useState( initialValues?.movie || null )
    const [content, setContent] = useState( initialValues?.comment || '' )
    const [rating, setRating] = useState( initialValues?.rating || 0 )
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        if (!initialValues) {
            return
        }

        setQuery( initialValues.movie?.title || '')

        setSelectedMovie( initialValues.movie || null)

        setContent( initialValues.comment || '')

        setRating( initialValues.rating || 0)
    }, [initialValues])


    useEffect(() => {
        if (
            query.trim().length < 2 ||
            selectedMovie
        ) {
            setResults([])
            return
        }

        const timeout = setTimeout(
            async () => {
                try {
                    setSearching(true)

                    const movies =
                        await searchMovies(query)

                    setResults(movies)
                } catch {
                    setResults([])
                } finally {
                    setSearching(false)
                }
            },
            400
        )

        return () =>
            clearTimeout(timeout)

    }, [query, selectedMovie])


    const handleTitleChange = (event) => {
        setQuery(event.target.value)
        if (selectedMovie) {
            setSelectedMovie(null)
        }
    }


    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie)

        setQuery(movie.title)

        setResults([])
    }


    const isValid =
        selectedMovie &&
        content.trim() &&
        rating > 0


    const handleSubmit = (event) => {
        event.preventDefault()

        if (!isValid) {
            return
        }

        onSubmit({
            movieId: selectedMovie.id,
            comment: content.trim(),
            rating,
        })
    }


    return (
        <form
            className="c-review-form"
            onSubmit={handleSubmit}
        >
            <div className="c-review-form__main">

                <div className="c-movie-search">
                    <FormField
                        id="review-title"
                        label="Título de la película (obligatorio)"
                        name="title"
                        value={query}
                        maxLength={100}
                        autoComplete="off"
                        onChange={handleTitleChange}
                        required
                    />

                    {searching && (
                        <p>
                            Buscando...
                        </p>
                    )}

                    {results.length > 0 && (
                        <div className="c-movie-search__results">
                            {results.map(movie => (
                                <button
                                    key={movie.id}
                                    type="button"
                                    className="c-movie-search__result"
                                    onClick={() =>
                                        handleMovieSelect(
                                            movie
                                        )
                                    }
                                >
                                    {movie.posterUrl && (
                                        <img
                                            src={movie.posterUrl}
                                            alt=""
                                        />
                                    )}

                                    <span>
                                        {movie.title}

                                        {movie.year &&
                                            ` (${movie.year})`
                                        }
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>


                <FormField
                    id="review-content"
                    as="textarea"
                    rows={8}
                    label="Tu reseña (obligatorio)"
                    name="content"
                    placeholder="Cuenta qué te pareció la película..."
                    value={content}
                    maxLength={1000}
                    onChange={
                        event =>
                            setContent(
                                event.target.value
                            )
                    }
                    required
                />


                <StarRating
                    name="rating"
                    value={rating}
                    onChange={setRating}
                />
            </div>


            <PosterPreview
                movie={selectedMovie}
            />


            <div className="c-review-form__actions">
                <Button
                    variant="light"
                    onClick={onCancel}
                >
                    Cancelar
                </Button>

                <Button
                    type="submit"
                    icon={FiCheck}
                    disabled={!isValid}
                >
                    {submitLabel}
                </Button>
            </div>
        </form>
    )
}

export default ReviewForm