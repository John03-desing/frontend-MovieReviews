import { useState } from 'react'
import Button from '../components/Button/Button'
import AuthDrawer from '../components/AuthDrawer/AuthDrawer'
import LoginForm from '../components/LoginForm/LoginForm'
import RegisterForm from '../components/RegisterForm/RegisterForm'

const drawerCopy = {
  login: { title: 'Acceso', subtitle: 'Inicia sesión para ver y escribir reseñas' },
  register: { title: 'Crea tu cuenta', subtitle: 'Regístrate para compartir tus reseñas' },
}

function Landing() {
  const [mode, setMode] = useState(null) // null | 'login' | 'register'
  const copy = mode ? drawerCopy[mode] : null

  return (
    <div className="c-landing">
      <header className="o-container c-landing__header">
        <p className="c-landing__logo">MovieReviews</p>

        <div className="c-landing__actions">
          <Button variant="light" onClick={() => setMode('login')}>Iniciar sesión</Button>
          <Button onClick={() => setMode('register')}>Crear cuenta</Button>
        </div>
      </header>

      <main className="o-container c-landing__content">
        <h1 className="c-landing__title">Reseñas reales de las películas que amas</h1>
        <p className="c-landing__subtitle">
          Descubre estrenos, comparte tu opinión y sigue a tus actores favoritos.
        </p>
      </main>
      <AuthDrawer
        isOpen={mode !== null}
        title={copy?.title}
        subtitle={copy?.subtitle}
        onClose={() => setMode(null)}
      >
        {mode === 'login' && <LoginForm onSwitch={() => setMode('register')} />}
        {mode === 'register' && <RegisterForm onSwitch={() => setMode('login')} />}
      </AuthDrawer>
    </div>
  )
}

export default Landing