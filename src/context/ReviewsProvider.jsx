import { useState } from 'react'
import { ReviewsContext } from './ReviewsContext'
import { initialReviews } from '../data/reviews'

export function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState(initialReviews)

  const addReview = (data) => {
    const review = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    setReviews((current) => [review, ...current])
  }

  const updateReview = (id, data) => {
    setReviews((current) =>
      current.map((review) => (review.id === id ? { ...review, ...data } : review))
    )
  }

  const deleteReview = (id) => {
    setReviews((current) => current.filter((review) => review.id !== id))
  }

  const getReview = (id) => reviews.find((review) => review.id === id)

  return (
    <ReviewsContext.Provider value={{ reviews, addReview, updateReview, deleteReview, getReview }}>
      {children}
    </ReviewsContext.Provider>
  )
}