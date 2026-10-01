import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FormField from '../FormField/FormField'
import Button from '../Button/Button'

import { login as loginRequest } from '../../services/auth.service'
import { useAuth } from '../../context/AuthContext'

function LoginForm({ onSwitch }) {

    const navigate = useNavigate()
    const { login } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {

        event.preventDefault()

        setError('')
        setLoading(true)

        const formData = new FormData(event.currentTarget)

        const email = formData.get('email')
        const password = formData.get('password')

        try {

            const data = await loginRequest({
                email,
                password,
            })

            login(data)

            if (data.user?.role === 'admin') {

                navigate('/admin', {
                    replace: true
                })

            } else {

                navigate('/inicio', {
                    replace: true
                })

            }

        } catch (error) {

            setError(error.message)

        } finally {

            setLoading(false)

        }
    }

    return (
        <form className="c-auth-form" onSubmit={handleSubmit}>
            <FormField
                id="login-email"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                required
            />

            <FormField
                id="login-password"
                label="Contraseña"
                type="password"
                name="password"
                autoComplete="current-password"
                required
            />

            {error && (
                <p className="c-auth-form__error">
                    {error}
                </p>
            )}

            <Button
                type="submit"
                icon={FiArrowRight}
                block
                disabled={loading}
            >
                {
                    loading
                        ? 'Iniciando sesión...'
                        : 'Iniciar sesión'
                }
            </Button>

            <div className="c-auth-form__links">
                <button
                    className="c-auth-form__link"
                    type="button"
                    onClick={onSwitch}
                >
                    ¿Sin cuenta? Regístrate
                </button>
            </div>

        </form>
    )
}

export default LoginForm