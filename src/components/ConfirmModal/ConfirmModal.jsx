import Button from '../Button/Button'

function ConfirmModal({
    open,
    title,
    message,
    onConfirm,
    onCancel,
    loading = false
}) {
    if (!open) {
        return null
    }

    return (
        <div
            className="c-modal"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="c-modal__backdrop"
                onClick={onCancel}
            />

            <div
                className="c-modal__panel c-modal__panel--small"
            >
                <h2 className="c-modal__title">
                    {title}
                </h2>

                <p>
                    {message}
                </p>

                <div className="c-modal__actions">
                    <Button
                        variant="secondary"
                        onClick={onCancel}
                    >
                        Cancelar
                    </Button>

                    <Button
                        onClick={onConfirm}
                        disabled={loading}
                    >
                        {loading
                            ? 'Eliminando...'
                            : 'Eliminar'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal