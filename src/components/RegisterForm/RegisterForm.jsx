import { FiUserPlus } from 'react-icons/fi'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'

function RegisterForm({ onSwitch }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    // La lógica de registro se agrega después
  }

  return (
    <form className="c-auth-form" onSubmit={handleSubmit}>
      <FormField id="register-username" label="Nombre de usuario" name="username" autoComplete="username" required />
      <FormField id="register-email" label="Email" type="email" name="email" autoComplete="email" required />
      <FormField id="register-password" label="Contraseña" type="password" name="password" autoComplete="new-password" minLength={8} required />
      <FormField id="register-confirm" label="Confirmar contraseña" type="password" name="confirm" autoComplete="new-password" required />

      <Button type="submit" icon={FiUserPlus} block>Crear cuenta</Button>

      <div className="c-auth-form__links">
        <button className="c-auth-form__link" type="button" onClick={onSwitch}>¿Ya tienes cuenta? Inicia sesión</button>
      </div>
    </form>
  )
}

export default RegisterForm