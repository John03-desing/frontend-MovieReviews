const API_URL = 'http://localhost:3000/api'

export const createReview = async ( review, token) => {
    const response = await fetch(
        `${API_URL}/reviews`,
        {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json',
                Authorization:
                    `Bearer ${token}`,
            },
            body: JSON.stringify(review),
        }
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al publicar la reseña'
        )
    }

    return data.review
}

export const getReviews = async ( genreId = null ) => {
    const params = new URLSearchParams()

    if (genreId) {
        params.set('genreId', genreId)
    }

    const query =
        params.toString()
            ? `?${params.toString()}`
            : ''

    const response = await fetch(
        `${API_URL}/reviews${query}`
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al obtener reseñas'
        )
    }

    return data.reviews
}

export const getMyReviews = async (token) => {
    const response = await fetch(
        `${API_URL}/reviews/mine`,
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
            'Error al obtener tus reseñas'
        )
    }

    return data.reviews
}


export const getMyReviewById = async ( reviewId, token ) => {
    const response = await fetch(
        `${API_URL}/reviews/mine/${reviewId}`,
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
            'Error al obtener la reseña'
        )
    }

    return data.review
}


export const updateReview = async ( reviewId, values, token ) => {
    const response = await fetch(
        `${API_URL}/reviews/${reviewId}`,
        {
            method: 'PUT',

            headers: {
                'Content-Type':
                    'application/json',

                Authorization:
                    `Bearer ${token}`
            },

            body: JSON.stringify(values)
        }
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al actualizar la reseña'
        )
    }

    return data.review
}


export const deleteReview = async ( reviewId,token ) => {
    const response = await fetch(
        `${API_URL}/reviews/${reviewId}`,
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
            'Error al eliminar la reseña'
        )
    }

    return data
}