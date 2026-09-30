import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import CreateReview from './pages/CreateReview'
import MainLayout from './components/MainLayout/MainLayout'
import ScrollToHash from './components/ScrollToHash/ScrollToHash'
import MyReviews from './pages/MyReviews'
import EditReview from './pages/EditReview'

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<MainLayout />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/reviews/nueva" element={<CreateReview />} />
          <Route path="/mis-reviews" element={<MyReviews />} />
          <Route path="/reviews/:id/editar" element={<EditReview />} />
        </Route>
      </Routes>
    </>
  )
}

export default App