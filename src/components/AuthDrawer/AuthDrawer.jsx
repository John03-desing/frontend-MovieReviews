import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

function AuthDrawer({ isOpen, title, subtitle, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <div
      className={`c-auth-drawer${isOpen ? ' c-auth-drawer--open' : ''}`}
      onClick={onClose}
    >
      <aside
        className="c-auth-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-drawer-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="c-auth-drawer__close" type="button" onClick={onClose} aria-label="Cerrar">
          <FiX aria-hidden="true" />
        </button>

        <p className="c-auth-drawer__brand">MovieReviews</p>
        <h2 className="c-auth-drawer__title" id="auth-drawer-title">{title}</h2>
        <p className="c-auth-drawer__subtitle">{subtitle}</p>

        {children}
      </aside>
    </div>
  )
}

export default AuthDrawer