import { useEffect, useState } from 'react'
import MobileViewport from './components/commonfiles/MobileViewport'
import Header, { type Page, type ViewMode } from './components/Header'
import { PageTransition } from './components/layout'
import Home from './Home'

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop')
  const [activePage, setActivePage] = useState<Page>('home')
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
          activePage={activePage}
          onNavigate={setActivePage}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onClose={handleClose}
        />
      )}

      <div className="flex-1 overflow-hidden relative z-10">
        <MobileViewport isMobile={isMobile}>
          <PageTransition>
            {activePage === 'home' || activePage === 'home2' ? (
              <Home isMobile={isMobile} />
            ) : (
              <div className="h-full w-full bg-white flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-extrabold text-cremp-text-primary mb-4 capitalize">{activePage}</h1>
                <p className="text-cremp-text-secondary max-w-sm">
                  This is a preview of the {activePage} view inside the {isMobile ? 'Mobile' : 'Desktop'} viewport.
                </p>
              </div>
            )}
          </PageTransition>
        </MobileViewport>
      </div>
    </div>
  )
}

export default App
