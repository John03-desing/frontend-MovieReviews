import { FiUserPlus } from 'react-icons/fi'
import { useState } from 'react'

import FormField from '../FormField/FormField'
import Button from '../Button/Button'

import { register as registerRequest } from '../../services/auth.service'

function RegisterForm({ onSwitch }) {

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget

    setError('')
    setSuccess('')

    const formData = new FormData(form)

    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirm = formData.get('confirm')

    if (password !== confirm) {
      setError('Las contraseñas no coinciden')
      return
    }

    setLoading(true)

    try {
      await registerRequest({
        username,
        email,
        password,
      })

      setSuccess(
        'Cuenta creada correctamente. Ahora puedes iniciar sesión.'
      )

      form.reset()

    } catch (error) {
      setError(error.message)

    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="c-auth-form" onSubmit={handleSubmit}>
      <FormField id="register-username" label="Nombre de usuario" name="username" autoComplete="username" required />
      <FormField id="register-email" label="Email" type="email" name="email" autoComplete="email" required />
      <FormField id="register-password" label="Contraseña" type="password" name="password" autoComplete="new-password" minLength={8} required />
      <FormField id="register-confirm" label="Confirmar contraseña" type="password" name="confirm" autoComplete="new-password" required />
      {error &&(
        <p className="c-auth-form__error">
          {error}
        </p>
      )}

      {success && (
        <p className="c-auth-form__success">
          {success}
        </p>
      )}

      <Button type="submit" icon={FiUserPlus} block>
        {loading ? 'Creando cuenta...' : 'Crear cuenta'}
      </Button>

      <div className="c-auth-form__links">
        <button className="c-auth-form__link" type="button" onClick={onSwitch}>¿Ya tienes cuenta? Inicia sesión</button>
      </div>
    </form>
  )
}

export default RegisterForm