const API_URL = 'http://localhost:3000/api'


export const getFavorites = async (token) => {
    const response = await fetch(
        `${API_URL}/favorites`,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al obtener favoritos'
        )
    }

    return data.favorites
}


export const addFavorite = async (
    movieId,
    token
) => {
    const response = await fetch(
        `${API_URL}/favorites`,
        {
            method: 'POST',

            headers: {
                'Content-Type':
                    'application/json',

                Authorization:
                    `Bearer ${token}`
            },

            body: JSON.stringify({
                movieId
            })
        }
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al guardar favorito'
        )
    }

    return data.favorite
}


export const removeFavorite = async (
    movieId,
    token
) => {
    const response = await fetch(
        `${API_URL}/favorites/${movieId}`,
        {
            method: 'DELETE',

            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al eliminar favorito'
        )
    }

    return data
}