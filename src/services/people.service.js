const API_URL = 'http://localhost:3000/api'

export const getFeaturedPeople = async () => {
    const response = await fetch(
        `${API_URL}/people/featured`
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message ||
            'Error al obtener los actores destacados'
        )
    }

    return data.people
}