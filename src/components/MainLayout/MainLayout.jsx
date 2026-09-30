import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function MainLayout() {
  return (
    <>
      <div className="c-site-header">
        <TopBar />
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout