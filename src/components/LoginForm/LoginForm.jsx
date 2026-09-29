import { FiArrowRight } from 'react-icons/fi'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'

function LoginForm({ onSwitch }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    // La lógica de inicio de sesión se agrega después
  }

  return (
    <form className="c-auth-form" onSubmit={handleSubmit}>
      <FormField id="login-email" label="Email" type="email" name="email" autoComplete="email" required />
      <FormField id="login-password" label="Contraseña" type="password" name="password" autoComplete="current-password" required />

      <Button type="submit" icon={FiArrowRight} block>Iniciar sesión</Button>

      <div className="c-auth-form__links">
        <button className="c-auth-form__link" type="button" onClick={onSwitch}>¿Sin cuenta? Regístrate</button>
      </div>
    </form>
  )
}

export default LoginForm