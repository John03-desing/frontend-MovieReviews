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
  const [mode, setMode] = useState('login') // null | 'login' | 'register'
  const [isOpen, setIsOpen] = useState(false)
  const copy = mode ? drawerCopy[mode] : null

  const openDrawer = (nextMode) => {
    setMode(nextMode)
    setIsOpen(true)
  }

  const closeDrawer = () => setIsOpen(false)

  return (
    <div className="c-landing">
      <header className="o-container c-landing__header">
        <p className="c-landing__logo">MovieReviews</p>

        <div className="c-landing__actions">
          <Button variant="light" onClick={() => openDrawer('login')}>Iniciar sesión</Button>
          <Button onClick={() => openDrawer('register')}>Crear cuenta</Button>
        </div>
      </header>

      <main className="o-container c-landing__content">
        <h1 className="c-landing__title">Reseñas reales de las películas que amas</h1>
        <p className="c-landing__subtitle">
          Descubre estrenos, comparte tu opinión y sigue a tus actores favoritos.
        </p>
      </main>
      <AuthDrawer
        isOpen={isOpen}
        title={copy.title}
        subtitle={copy.subtitle}
        onClose={closeDrawer}
      >
        {mode === 'login' ? (
          <LoginForm onSwitch={() => setMode('register')} />
        ) : (
          <RegisterForm onSwitch={() => setMode('login')} />
        )}
      </AuthDrawer>
    </div>
  )
}

export default Landing