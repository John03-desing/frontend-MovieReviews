import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ReviewsProvider } from './context/ReviewsProvider'
import { AuthProvider } from './context/AuthContext.jsx'

import './styles/main.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ReviewsProvider>
          <App />
        </ReviewsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
