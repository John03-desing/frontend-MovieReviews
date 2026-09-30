import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import FormField from '../FormField/FormField'
import StarRating from '../StarRating/StarRating'
import PosterPreview from '../PosterPreview/PosterPreview'
import Button from '../Button/Button'

const emptyValues = { title: '', content: '', rating: 0 }

function ReviewForm({
  initialValues = emptyValues,
  submitLabel = 'Publicar reseña',
  onSubmit,
  onCancel,
}) {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)
  const [rating, setRating] = useState(initialValues.rating)

  const isValid = title.trim() && content.trim() && rating > 0

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ title: title.trim(), content: content.trim(), rating })
  }

  return (
    <form className="c-review-form" onSubmit={handleSubmit}>
      <div className="c-review-form__main">
        <FormField
          id="review-title"
          label="Título de la película (obligatorio)"
          name="title"
          value={title}
          maxLength={100}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <FormField
          id="review-content"
          as="textarea"
          rows={8}
          label="Tu reseña (obligatorio)"
          name="content"
          placeholder="Cuenta qué te pareció la película..."
          value={content}
          maxLength={1000}
          onChange={(event) => setContent(event.target.value)}
          required
        />
        <StarRating name="rating" value={rating} onChange={setRating} />
      </div>

      <PosterPreview title={title} />

      <div className="c-review-form__actions">
        <Button variant="light" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" icon={FiCheck} disabled={!isValid}>{submitLabel}</Button>
      </div>
    </form>
  )
}

export default ReviewForm