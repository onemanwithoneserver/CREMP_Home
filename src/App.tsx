import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import MobileViewport from './components/commonfiles/MobileViewport'
import Header, { type ViewMode } from './components/Header'
import { PageTransition } from './components/layout'
import Home from './Home'
import Franchise from './Franchise'
import Investors from './Investors'
import BuyersAndSellers from './BuyersAndSellers'
import DeveloperAndOwner from './DeveloperAndOwner'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showHeader, setShowHeader] = useState(true)

  const pathParts = location.pathname.split('/').filter(Boolean)
  const viewMode: ViewMode = pathParts[0] === 'mobile' ? 'mobile' : 'desktop'
  const isMobile = viewMode === 'mobile'

  const handleViewModeChange = (newMode: ViewMode) => {
    const page = pathParts[1] || 'home'
    navigate(`/${newMode}/${page}`)
  }

  const handleClose = () => {
    setShowHeader(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'm') {
        e.preventDefault()
        setShowHeader(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="flex flex-col h-screen w-full bg-cremp-background">
      {showHeader && (
        <Header
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          onClose={handleClose}
        />
      )}

      <div className="flex-1 overflow-hidden relative z-10">
        <MobileViewport isMobile={isMobile}>
          <PageTransition motionKey={location.pathname}>
            <Routes location={location}>
              <Route path="/:viewMode/home" element={<Home isMobile={isMobile} />} />
              <Route path="/:viewMode/franchise" element={<Franchise isMobile={isMobile} />} />
              <Route path="/:viewMode/investors" element={<Investors isMobile={isMobile} />} />
              <Route path="/:viewMode/buyers-and-sellers" element={<BuyersAndSellers isMobile={isMobile} />} />
              <Route path="/:viewMode/developer-and-owner" element={<DeveloperAndOwner isMobile={isMobile} />} />
              <Route path="*" element={<Navigate to="/desktop/home" replace />} />
            </Routes>
          </PageTransition>
        </MobileViewport>
      </div>
    </div>
  )
}

export default App
