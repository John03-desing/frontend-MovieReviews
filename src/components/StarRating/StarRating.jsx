import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function StarRating({ name, value, onChange, max = 10 }) {
  const [hover, setHover] = useState(0)
  const shown = hover || value

  return (
    <fieldset className="c-star-rating">
      <legend className="c-star-rating__legend">Calificación</legend>

      <div className="c-star-rating__stars" onMouseLeave={() => setHover(0)}>
        {Array.from({ length: max }, (_, index) => {
          const score = index + 1
          const isActive = score <= shown

          return (
            <label
              key={score}
              className={`c-star-rating__star${isActive ? ' c-star-rating__star--active' : ''}`}
              onMouseEnter={() => setHover(score)}
            >
              <input
                className="u-visually-hidden"
                type="radio"
                name={name}
                value={score}
                checked={value === score}
                onChange={() => onChange(score)}
              />
              <FaStar aria-hidden="true" />
              <span className="u-visually-hidden">{score} de {max}</span>
            </label>
          )
        })}
      </div>

      <p className="c-star-rating__value">{value ? `${value}/${max}` : 'Sin calificar'}</p>
    </fieldset>
  )
}

export default StarRating