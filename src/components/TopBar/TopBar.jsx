import { FiLogOut } from 'react-icons/fi'

function TopBar() {
  return (
    <div className="c-top-bar">
      <div className="o-container c-top-bar__inner">
        <p className="c-top-bar__text">Tu espacio para reseñas de películas</p>

        <button
          className="c-top-bar__logout"
          type="button"
          aria-label="Cerrar sesión"
        >
          <FiLogOut className="c-top-bar__icon--outline" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default TopBar