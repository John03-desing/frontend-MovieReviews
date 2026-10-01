const API_URL = import.meta.env.VITE_API_URL


export const getAdminReviews = async ( username, token ) => {
    const params =
        new URLSearchParams()

    if (username.trim()) {
        params.set(
            'username',
            username.trim()
        )
    }

    const query =
        params.toString()
            ? `?${params.toString()}`
            : ''

    const response = await fetch(
        `${API_URL}/admin/reviews${query}`,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    )

    const data =
        await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al obtener reseñas'
        )
    }

    return data.reviews
}


export const deleteAdminReview = async ( reviewId, token ) => {
    const response = await fetch(
        `${API_URL}/admin/reviews/${reviewId}`,
        {
            method: 'DELETE',

            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    )

    const data =
        await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al eliminar la reseña'
        )
    }

    return data
}