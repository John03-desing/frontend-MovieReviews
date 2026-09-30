import { useEffect, useRef } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import Button from '../Button/Button'

function ConfirmDialog({ isOpen, title, message, confirmLabel = 'Eliminar', onConfirm, onCancel }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      className="c-confirm-dialog"
      aria-labelledby="confirm-dialog-title"
      onCancel={(event) => {
        event.preventDefault() // Escape: que el estado de React decida el cierre
        onCancel()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onCancel() // clic en el fondo difuminado
      }}
    >
      <div className="c-confirm-dialog__body">
        <h2 className="c-confirm-dialog__title" id="confirm-dialog-title">{title}</h2>
        <p>{message}</p>

        <div className="c-confirm-dialog__actions">
          <Button variant="light" onClick={onCancel}>Cancelar</Button>
          <Button variant="danger" icon={FiTrash2} onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </dialog>
  )
}

export default ConfirmDialog