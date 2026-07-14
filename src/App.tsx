import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MobileViewport from './components/commonfiles/MobileViewport'
import Header, { type ViewMode } from './components/Header'
import { PageTransition } from './components/layout'
import Home from './Home'
import Franchise from './Franchise'

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop')
  const [showHeader, setShowHeader] = useState(true)

  const isMobile = viewMode === 'mobile'

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
          onViewModeChange={setViewMode}
          onClose={handleClose}
        />
      )}

      <div className="flex-1 overflow-hidden relative z-10">
        <MobileViewport isMobile={isMobile}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home isMobile={isMobile} />} />
              <Route path="/franchise" element={<Franchise isMobile={isMobile} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PageTransition>
        </MobileViewport>
      </div>
    </div>
  )
}

export default App
