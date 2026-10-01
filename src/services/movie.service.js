const API_URL = 'http://localhost:3000/api'

export const getMovies = async () => {
    const response = await fetch(`${API_URL}/movies/upcoming`)

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message || 'Error al obtener las películas'
        )
    }

    return data.movies
}

export const searchMovies = async (query) => {
    const response = await fetch(
        `${API_URL}/movies/search?query=${
            encodeURIComponent(query)
        }`
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al buscar películas'
        )
    }

    return data.movies
}

export const getGenres = async () => {
    const response = await fetch(
        `${API_URL}/movies/genres`
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al obtener géneros'
        )
    }

    return data.genres
}