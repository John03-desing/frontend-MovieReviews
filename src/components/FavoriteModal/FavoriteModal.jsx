import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { searchMovies } from '../../services/movie.service'
import Button from '../Button/Button'


function FavoriteModal({
    open,
    onClose,
    onSave
}) {
    const [query, setQuery] =
        useState('')

    const [results, setResults] =
        useState([])

    const [selectedMovie, setSelectedMovie] =
        useState(null)

    const [searching, setSearching] =
        useState(false)

    const [saving, setSaving] =
        useState(false)

    const [error, setError] =
        useState('')


    useEffect(() => {
        if (!open) {
            return
        }

        if (query.trim().length < 2) {
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
                } catch (error) {
                    setError(error.message)
                } finally {
                    setSearching(false)
                }
            },
            400
        )

        return () =>
            clearTimeout(timeout)
    }, [query, open])

    useEffect(() => {
        if (!open) {
            return
        }

        const previousOverflow = document.body.style.overflow

        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
        }, [open])

    const handleSave = async () => {
        if (!selectedMovie) {
            return
        }

        try {
            setSaving(true)
            setError('')

            await onSave(selectedMovie)

            setQuery('')
            setResults([])
            setSelectedMovie(null)

            onClose()
        } catch (error) {
            setError(error.message)
        } finally {
            setSaving(false)
        }
    }


    if (!open) {
        return null
    }


    return (
        <div
            className="c-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="favorite-modal-title"
        >
            <div
                className="c-modal__backdrop"
                onClick={onClose}
            />

            <div className="c-modal__panel">

                <header className="c-modal__header">
                    <h2
                        id="favorite-modal-title"
                        className="c-modal__title"
                    >
                        Busca tu película
                    </h2>

                    <button
                        className="c-modal__close"
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar"
                    >
                        <FiX aria-hidden="true" />
                    </button>
                </header>


                <input
                    className="c-modal__search"
                    type="search"
                    value={query}
                    placeholder="Escribe el título..."
                    onChange={event => {
                        setQuery(event.target.value)
                        setSelectedMovie(null)
                    }}
                />


                {searching && (
                    <p>Buscando...</p>
                )}


                <div className="c-modal__results">
                    {results.map(movie => (
                        <button
                            key={movie.id}
                            type="button"
                            className={
                                `c-modal__movie${
                                    selectedMovie?.id === movie.id
                                        ? ' c-modal__movie--selected'
                                        : ''
                                }`
                            }
                            onClick={() =>
                                setSelectedMovie(movie)
                            }
                        >
                            {movie.posterUrl && (
                                <img
                                    className="c-modal__movie-image"
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


                {error && (
                    <p className="c-modal__error">
                        {error}
                    </p>
                )}


                <footer className="c-modal__actions">
                    <Button
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>

                    <Button
                        disabled={
                            !selectedMovie ||
                            saving
                        }
                        onClick={handleSave}
                    >
                        {saving
                            ? 'Guardando...'
                            : 'Guardar'
                        }
                    </Button>
                </footer>
            </div>
        </div>
    )
}

export default FavoriteModal