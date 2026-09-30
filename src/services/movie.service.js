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