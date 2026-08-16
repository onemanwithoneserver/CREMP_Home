import { ChevronDown, Monitor, Moon, Smartphone, Sun, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../Home/ThemeContext";
import Dropdown from "./commonfiles/Dropdown";

export type Page =
  | "home"
  | "franchise"
  | "franchise-home"
  | "franchise-home-01"
  | "investors"
  | "buyers-and-sellers"
  | "developer-and-owner"
  | "filters"
  | "building-box"
  | "all-building-box"
  | "land-box";
export type ViewMode = "desktop" | "mobile";

export interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (v: ViewMode) => void;
  showViewControls?: boolean;
  onClose?: () => void;
}

const PAGE_LABELS: Record<Page, string> = {
  home: "Home",
  franchise: "Franchise Page",
  "franchise-home": "Franchise Home",
  "franchise-home-01": "Franchise Home 01",
  investors: "Investors Page",
  "buyers-and-sellers": "Buyers & Sellers",
  "developer-and-owner": "Developer & Owner",
  filters: "Filters",
  "all-building-box": "Commercial listing",
  "building-box": "Full commercial building",
  "land-box": "Commercial listing land",
};

const PAGE_OPTIONS = (Object.keys(PAGE_LABELS) as Page[])
  .filter(
    (p) =>
      !["investors", "buyers-and-sellers", "developer-and-owner"].includes(p),
  )
  .map((p) => ({
    value: p,
    label: PAGE_LABELS[p],
  }));

export default function Header({
  viewMode,
  onViewModeChange,
  showViewControls = true,
  onClose,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const activePage: Page = location.pathname.includes("franchise-home-01")
    ? "franchise-home-01"
    : location.pathname.includes("franchise-home")
      ? "franchise-home"
      : location.pathname.includes("franchise")
        ? "franchise"
        : location.pathname.includes("investors")
          ? "investors"
          : location.pathname.includes("buyers-and-sellers")
            ? "buyers-and-sellers"
            : location.pathname.includes("developer-and-owner")
              ? "developer-and-owner"
              : location.pathname.includes("filters")
                ? "filters"
                : location.pathname.includes("all-building-box")
                  ? "all-building-box"
                  : location.pathname.includes("building-box")
                    ? "building-box"
                    : location.pathname.includes("land-box")
                      ? "land-box"
                      : "home";

  const handleNavigate = useCallback(
    (page: string) => {
      navigate(`/${viewMode}/${page}`);
    },
    [navigate, viewMode],
  );

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("mousedown", handleMouseDown, {
      capture: true,
      passive: true,
    });
    document.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      document.removeEventListener("mousedown", handleMouseDown, {
        capture: true,
      });
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [mobileMenuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-cremp-background/80 backdrop-blur-lg border-b border-cremp-primary/15 dark:border-cremp-border shadow-sm">
      <div className="max-w-[1200px] mx-auto px-2">
        <div className="flex items-center justify-between h-14 gap-3">
          <div
            className="flex items-center gap-2 shrink-0"
            aria-label="CREMP Logo"
          >
            <span className="text-lg font-extrabold tracking-tight text-cremp-primary dark:text-white select-none">
              CREMP
            </span>
          </div>

          <nav
            aria-label="View Controls"
            className="hidden md:flex flex-1 justify-center"
          >
            {showViewControls && (
              <div
                role="group"
                aria-label="Select view mode"
                className="flex items-center bg-cremp-primary/8 dark:bg-cremp-surface border border-cremp-primary/15 dark:border-cremp-border rounded p-0.5 gap-0.5"
              >
                <button
                  type="button"
                  aria-pressed={viewMode === "desktop"}
                  onClick={() => onViewModeChange("desktop")}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-1 motion-reduce:transition-none ${
                    viewMode === "desktop"
                      ? "gradient-primary text-white shadow-elevation-1"
                      : "text-cremp-primary dark:text-cremp-text-secondary bg-transparent hover:bg-white/60 dark:hover:bg-cremp-surface-alt"
                  }`}
                >
                  <Monitor
                    size={14}
                    strokeWidth={viewMode === "desktop" ? 2.5 : 2}
                    aria-hidden="true"
                  />
                  Desktop
                </button>
                <button
                  type="button"
                  aria-pressed={viewMode === "mobile"}
                  onClick={() => onViewModeChange("mobile")}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-1 motion-reduce:transition-none ${
                    viewMode === "mobile"
                      ? "gradient-primary text-white shadow-elevation-1"
                      : "text-cremp-primary dark:text-cremp-text-secondary bg-transparent hover:bg-white/60 dark:hover:bg-cremp-surface-alt"
                  }`}
                >
                  <Smartphone
                    size={14}
                    strokeWidth={viewMode === "mobile" ? 2.5 : 2}
                    aria-hidden="true"
                  />
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
                {(["desktop", "mobile"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    aria-label={
                      v === "desktop" ? "Desktop view" : "Mobile view"
                    }
                    aria-pressed={viewMode === v}
                    onClick={() => onViewModeChange(v)}
                    className={`w-8 h-8 flex items-center justify-center rounded border transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-1 motion-reduce:transition-none ${
                      viewMode === v
                        ? "border-cremp-primary bg-cremp-primary/10 text-cremp-primary dark:text-cremp-primary-light"
                        : "border-cremp-border bg-white dark:bg-cremp-surface text-cremp-text-muted hover:bg-cremp-surface-alt hover:text-cremp-text-secondary"
                    }`}
                  >
                    {v === "desktop" ? (
                      <Monitor
                        size={14}
                        strokeWidth={viewMode === v ? 2.5 : 2}
                        aria-hidden="true"
                      />
                    ) : (
                      <Smartphone
                        size={14}
                        strokeWidth={viewMode === v ? 2.5 : 2}
                        aria-hidden="true"
                      />
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
                onChange={handleNavigate}
                size="sm"
                className="w-40"
              />
              <div className="w-px h-4 bg-cremp-border mx-1" />
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 text-cremp-text-muted hover:text-cremp-text-primary hover:bg-cremp-surface-alt rounded transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>

            <div className="relative sm:hidden" ref={mobileMenuRef}>
              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-haspopup="menu"
                aria-controls={`mobile-menu-${menuId}`}
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="flex items-center gap-1 px-3 py-1.5 rounded border border-cremp-border bg-white dark:bg-cremp-surface text-xs font-semibold text-cremp-text-primary shadow-elevation-1 hover:bg-cremp-surface-alt transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary"
              >
                {PAGE_LABELS[activePage]}
                <ChevronDown
                  size={12}
                  aria-hidden="true"
                  className={`text-cremp-text-muted transition-transform duration-200 motion-reduce:transition-none ${
                    mobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileMenuOpen && (
                <div
                  id={`mobile-menu-${menuId}`}
                  role="menu"
                  aria-label="Navigation Menu"
                  className="absolute right-0 mt-2 w-36 bg-white dark:bg-cremp-surface rounded border border-cremp-border shadow-elevation-3 overflow-hidden z-50 animate-fade-in-down"
                >
                  {(Object.keys(PAGE_LABELS) as Page[]).map((p) => {
                    const isActive = activePage === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        role="menuitem"
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => {
                          handleNavigate(p);
                          closeMenu();
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-base focus-visible:outline-none focus-visible:bg-cremp-primary/10 motion-reduce:transition-none ${
                          isActive
                            ? "bg-cremp-primary/10 text-cremp-primary dark:text-cremp-primary-light"
                            : "text-cremp-text-primary hover:bg-cremp-primary/5 dark:hover:bg-cremp-surface-alt"
                        }`}
                      >
                        {PAGE_LABELS[p]}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 sm:ml-1 rounded bg-white dark:bg-cremp-surface border border-cremp-border text-cremp-text-muted hover:bg-error-light dark:hover:bg-error/20 hover:text-error hover:border-error/20 transition-base shadow-elevation-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error"
                aria-label="Close navigation"
              >
                <X size={15} strokeWidth={2.5} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
