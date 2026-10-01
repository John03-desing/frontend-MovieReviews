import { FiPlus, FiTrash2 } from 'react-icons/fi'

function GalleryItem({ image, title, onAdd, onDelete}){
    const isEmpty = !image

    return(
        <figure
            className={`c-gallery-item${isEmpty ? ' c-gallery-item--empty' : ''}`}>
            {isEmpty ? (
                <button
                    className="c-gallery-item__add"
                    type="button"
                    onClick={onAdd}
                    aria-label="Añadir película favorita"
                >
                    <FiPlus aria-hidden="true" />
                </button>
            ) : (
                <>
                    <img
                        className="c-gallery-item__image"
                        src={image}
                        alt={`Póster de ${title}`}
                        loading="lazy"
                    />

                    <button
                        className="c-gallery-item__delete"
                        type="button"
                        onClick={onDelete}
                        aria-label={
                            `Eliminar ${title} de favoritos`
                        }
                    >
                        <FiTrash2
                            aria-hidden="true"
                        />
                    </button>
                </>
            )}      
        </figure>
    )
}

export default GalleryItem