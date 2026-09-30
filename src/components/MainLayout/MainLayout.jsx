import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function MainLayout() {
  return (
    <div className="o-layout">
      <div className="c-site-header">
        <TopBar />
        <Header />
      </div>

      <div className="o-layout__content">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout