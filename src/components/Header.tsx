import { useEffect, useRef, useState, useId, useCallback } from 'react'
import { Monitor, Smartphone, ChevronDown, X } from 'lucide-react'
import Dropdown from './commonfiles/Dropdown'

export type Page = 'home' | 'home2'
export type ViewMode = 'desktop' | 'mobile'

interface HeaderProps {
  activePage: Page
  onNavigate: (page: Page) => void
  viewMode: ViewMode
  onViewModeChange: (v: ViewMode) => void
  showViewControls?: boolean
  onClose?: () => void
}

const PAGE_LABELS: Record<Page, string> = {
  home: 'Home',
  home2: 'Home2',
}

const PAGE_OPTIONS = (Object.keys(PAGE_LABELS) as Page[]).map((p) => ({
  value: p,
  label: PAGE_LABELS[p],
}))

export default function Header({
  activePage,
  onNavigate,
  viewMode,
  onViewModeChange,
  showViewControls = true,
  onClose,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const closeMenu = useCallback(() => setMobileMenuOpen(false), [])

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        closeMenu()
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleMouseDown, { capture: true, passive: true })
      document.addEventListener('keydown', handleKeyDown, { capture: true })
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown, { capture: true })
      document.removeEventListener('keydown', handleKeyDown, { capture: true })
    }
  }, [mobileMenuOpen, closeMenu])

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-cremp-primary/15 shadow-elevation-1">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 gap-3">
          <div className="flex items-center gap-2 shrink-0" aria-label="CREMP Logo">
            <span className="text-xl font-extrabold tracking-tight text-cremp-primary select-none">CREMP</span>
            <span className="text-[0.45rem] font-bold text-cremp-accent bg-cremp-accent/10 px-1.5 py-0.5 rounded-full">BETA</span>
          </div>

          <nav aria-label="View Controls" className="hidden md:flex flex-1 justify-center">
            {showViewControls && (
              <div
                role="group"
                aria-label="Select view mode"
                className="flex items-center bg-cremp-primary/8 border border-cremp-primary/15 rounded p-0.5 gap-0.5"
              >
                <button
                  type="button"
                  aria-pressed={viewMode === 'desktop'}
                  onClick={() => onViewModeChange('desktop')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-1 motion-reduce:transition-none ${
                    viewMode === 'desktop'
                      ? 'gradient-primary text-white shadow-elevation-1'
                      : 'text-cremp-primary bg-transparent hover:bg-white/60'
                  }`}
                >
                  <Monitor size={14} strokeWidth={viewMode === 'desktop' ? 2.5 : 2} aria-hidden="true" />
                  Desktop
                </button>
                <button
                  type="button"
                  aria-pressed={viewMode === 'mobile'}
                  onClick={() => onViewModeChange('mobile')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-1 motion-reduce:transition-none ${
                    viewMode === 'mobile'
                      ? 'gradient-primary text-white shadow-elevation-1'
                      : 'text-cremp-primary bg-transparent hover:bg-white/60'
                  }`}
                >
                  <Smartphone size={14} strokeWidth={viewMode === 'mobile' ? 2.5 : 2} aria-hidden="true" />
                  Mobile
                </button>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            {showViewControls && (
              <div
                role="group"
                aria-label="Select view mode"
                className="flex md:hidden items-center gap-1"
              >
                {(['desktop', 'mobile'] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    aria-label={v === 'desktop' ? 'Desktop view' : 'Mobile view'}
                    aria-pressed={viewMode === v}
                    onClick={() => onViewModeChange(v)}
                    className={`w-8 h-8 flex items-center justify-center rounded border transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-1 motion-reduce:transition-none ${
                      viewMode === v
                        ? 'border-cremp-primary bg-cremp-primary/10 text-cremp-primary'
                        : 'border-cremp-border bg-white text-cremp-text-muted hover:bg-cremp-surface-alt hover:text-cremp-text-secondary'
                    }`}
                  >
                    {v === 'desktop' ? (
                      <Monitor size={14} strokeWidth={viewMode === v ? 2.5 : 2} aria-hidden="true" />
                    ) : (
                      <Smartphone size={14} strokeWidth={viewMode === v ? 2.5 : 2} aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            )}

            <div className="hidden sm:flex items-center gap-2">
              <label
                htmlFor="desktop-page-selector"
                className="text-[0.6rem] font-bold text-cremp-text-muted tracking-widest uppercase select-none whitespace-nowrap"
              >
                View
              </label>
              <Dropdown
                id="desktop-page-selector"
                options={PAGE_OPTIONS}
                value={activePage}
                onChange={(v) => onNavigate(v as Page)}
                size="sm"
                className="w-32"
              />
            </div>

            <div className="relative sm:hidden" ref={mobileMenuRef}>
              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-haspopup="menu"
                aria-controls={`mobile-menu-${menuId}`}
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="flex items-center gap-1 px-3 py-1.5 rounded border border-cremp-border bg-white text-xs font-semibold text-cremp-text-primary shadow-elevation-1 hover:bg-cremp-surface-alt transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary"
              >
                {PAGE_LABELS[activePage]}
                <ChevronDown
                  size={12}
                  aria-hidden="true"
                  className={`text-cremp-text-muted transition-transform duration-200 motion-reduce:transition-none ${
                    mobileMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileMenuOpen && (
                <div
                  id={`mobile-menu-${menuId}`}
                  role="menu"
                  aria-label="Navigation Menu"
                  className="absolute right-0 mt-2 w-36 bg-white rounded border border-cremp-border shadow-elevation-3 overflow-hidden z-50 animate-fade-in-down"
                >
                  {(Object.keys(PAGE_LABELS) as Page[]).map((p) => {
                    const isActive = activePage === p
                    return (
                      <button
                        key={p}
                        type="button"
                        role="menuitem"
                        aria-current={isActive ? 'page' : undefined}
                        onClick={() => {
                          onNavigate(p)
                          closeMenu()
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-base focus-visible:outline-none focus-visible:bg-cremp-primary/10 motion-reduce:transition-none ${
                          isActive
                            ? 'bg-cremp-primary/10 text-cremp-primary'
                            : 'text-cremp-text-primary hover:bg-cremp-primary/5'
                        }`}
                      >
                        {PAGE_LABELS[p]}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="hidden sm:flex items-center justify-center w-8 h-8 rounded bg-white border border-cremp-border text-cremp-text-muted hover:bg-error-light hover:text-error hover:border-error/20 transition-base ml-1 shadow-elevation-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error"
                aria-label="Close navigation"
              >
                <X size={15} strokeWidth={2.5} />
              </button>
            )}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="sm:hidden flex items-center justify-center w-8 h-8 rounded bg-white border border-cremp-border text-cremp-text-muted hover:bg-error-light hover:text-error transition-base shadow-elevation-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error"
                aria-label="Close navigation"
              >
                <X size={15} strokeWidth={2.5} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
