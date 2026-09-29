function GalleryItem({ image, title}){
    const isEmpty = !image

    return(
        <figure
            className={`c-gallery-item${isEmpty ? ' c-gallery-item--empty' : ''}`}
            aria-hidden={isEmpty}
        >
            {image && (
                <img className="c-gallery-item__image" src={image} alt={title} loading="lazy" />
            )}
            {title && <figcaption className="c=gallery-item__caption">{title}</figcaption>}           
        </figure>
    )
}

export default GalleryItem