import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

function TopBar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <div className="c-top-bar">
      <div className="o-container c-top-bar__inner">

        <p className="c-top-bar__text">
          Tu espacio para reseñas de películas
        </p>

        <div className="c-top-bar__actions">
          <span className="c-top-bar__username">
            {user?.username}
          </span>

          <button
            className="c-top-bar__logout"
            type="button"
            aria-label="Cerrar sesión"
            onClick={handleLogout}
          >
            <FiLogOut
              className="c-top-bar__icon--outline"
              aria-hidden="true"
            />
          </button>
        </div>

      </div>
    </div>
  )
}

export default TopBar