import { useLocation, useNavigate } from "react-router-dom";
import logo from "../Logo/CREMP.png";
import logoLight from "../Logo/CREMP_Light.png";

export interface MobileStickyFooterProps {
  activeTab?: "home" | "saved" | "hire-broker" | "hand-picked" | "explore" | "post-requirement" | string;
  onTabChange?: (tab: string) => void;
}

export default function MobileStickyFooter({
  activeTab: activeTabProp,
  onTabChange,
}: MobileStickyFooterProps = {}) {
  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split("/").filter(Boolean);
  const themeMode = pathParts[0] || "light";
  const viewMode = pathParts[1] || "mobile";
  const currentRoute = pathParts[2] || "home";

  // Derive active tab from prop or current route
  const currentActiveTab =
    activeTabProp ||
    (currentRoute === "explore"
      ? "explore"
      : currentRoute === "buy-search-results"
      ? "saved"
      : currentRoute === "home"
      ? "home"
      : "explore");

  const handleNav = (tab: string, path?: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
    if (path) {
      navigate(path);
    }
  };

  const isSavedActive = currentActiveTab === "saved";
  const isHireBrokerActive = currentActiveTab === "hire-broker";
  const isHandPickedActive = currentActiveTab === "hand-picked";
  const isExploreActive = currentActiveTab === "explore";
  const isPostReqActive = currentActiveTab === "post-requirement";

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="
        relative left-0 right-0 z-50
        flex flex-col w-full overflow-hidden
        bg-gradient-to-b from-[#162638] to-[#0a121d]
        border-t border-white/[0.08] shadow-[0_-8px_30px_rgba(0,0,0,0.4)]
        select-none font-['Outfit',sans-serif]
      "
    >
      <div className="flex items-stretch w-full relative">
        {/* CREMP Home Logo */}
        <button
          type="button"
          onClick={() => handleNav("home", `/${themeMode}/${viewMode}/home`)}
          className="flex flex-1 min-w-0 flex-col items-center justify-center gap-1 py-2 px-0.5 bg-transparent border-none cursor-pointer outline-none transition-all duration-300 ease-out hover:bg-white/[0.03] active:bg-white/[0.06] [-webkit-tap-highlight-color:transparent]"
          aria-label="Go to CREMP home"
        >
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <img
              alt="CREMP Logo"
              src={logo}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== logoLight) {
                  target.src = logoLight;
                }
              }}
              className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(246,178,59,0.3)]"
            />
          </div>
          <span className="block w-full text-center leading-tight whitespace-pre-wrap text-[0.55rem] tracking-wider font-bold uppercase text-white/90">
            CREMP
          </span>
        </button>

        <div className="self-stretch flex items-center py-3 shrink-0">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-50"></div>
        </div>

        {/* Saved */}
        <button
          type="button"
          onClick={() => handleNav("saved", `/${themeMode}/${viewMode}/buy-search-results`)}
          aria-label="Saved"
          aria-current={isSavedActive ? "page" : undefined}
          className="
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            bg-transparent border-none cursor-pointer outline-none
            transition-all duration-300 ease-out
            hover:bg-white/[0.03] active:bg-white/[0.06]
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
          "
        >
          <div
            className={`absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent transition-opacity duration-300 ${
              isSavedActive ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-b-full
              bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isSavedActive ? "w-[35%] opacity-100 shadow-[0_2px_12px_rgba(251,191,36,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform
              ${isSavedActive ? "scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            >
              <defs>
                <linearGradient id="goldGradSaved" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a"></stop>
                  <stop offset="50%" stopColor="#fbbf24"></stop>
                  <stop offset="100%" stopColor="#f59e0b"></stop>
                </linearGradient>
              </defs>
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                stroke={isSavedActive ? "url(#goldGradSaved)" : "white"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-300 ${isSavedActive ? "fill-amber-500/20" : "fill-none"}`}
              ></path>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
              text-[0.55rem] tracking-wide
              ${
                isSavedActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  : "text-white/70 font-normal group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              }
            `}
          >
            Saved
          </span>
          {isSavedActive && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)] animate-pulse"></div>
          )}
        </button>

        <div className="self-stretch flex items-center py-3 shrink-0">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-50"></div>
        </div>

        {/* Hire Broker */}
        <button
          type="button"
          onClick={() => handleNav("hire-broker", `/${themeMode}/${viewMode}/buyers-and-sellers`)}
          aria-label="Hire Broker"
          aria-current={isHireBrokerActive ? "page" : undefined}
          className="
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            bg-transparent border-none cursor-pointer outline-none
            transition-all duration-300 ease-out
            hover:bg-white/[0.03] active:bg-white/[0.06]
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
          "
        >
          <div
            className={`absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent transition-opacity duration-300 ${
              isHireBrokerActive ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-b-full
              bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isHireBrokerActive ? "w-[35%] opacity-100 shadow-[0_2px_12px_rgba(251,191,36,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform
              ${isHireBrokerActive ? "scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="goldGradBroker" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a"></stop>
                  <stop offset="50%" stopColor="#fbbf24"></stop>
                  <stop offset="100%" stopColor="#f59e0b"></stop>
                </linearGradient>
              </defs>
              <circle
                cx="10"
                cy="7"
                r="4.5"
                stroke={isHireBrokerActive ? "url(#goldGradBroker)" : "white"}
                strokeWidth="1.5"
              ></circle>
              <path
                d="M3 21v-2a6 6 0 0 1 8-5.5"
                stroke={isHireBrokerActive ? "url(#goldGradBroker)" : "white"}
                strokeWidth="1.5"
              ></path>
              <circle
                cx="17.5"
                cy="16.5"
                r="3.5"
                stroke={isHireBrokerActive ? "url(#goldGradBroker)" : "white"}
                strokeWidth="1.5"
              ></circle>
              <path
                d="M17.5 16.5v.01"
                stroke={isHireBrokerActive ? "url(#goldGradBroker)" : "white"}
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
              text-[0.55rem] tracking-wide
              ${
                isHireBrokerActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  : "text-white/70 font-normal group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              }
            `}
          >
            Hire Broker
          </span>
          {isHireBrokerActive && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)] animate-pulse"></div>
          )}
        </button>

        <div className="self-stretch flex items-center py-3 shrink-0">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-50"></div>
        </div>

        {/* Hand Picked */}
        <button
          type="button"
          onClick={() => handleNav("hand-picked", `/${themeMode}/${viewMode}/all-building-box`)}
          aria-label="Hand Picked"
          aria-current={isHandPickedActive ? "page" : undefined}
          className="
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            bg-transparent border-none cursor-pointer outline-none
            transition-all duration-300 ease-out
            hover:bg-white/[0.03] active:bg-white/[0.06]
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
          "
        >
          <div
            className={`absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent transition-opacity duration-300 ${
              isHandPickedActive ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-b-full
              bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isHandPickedActive ? "w-[35%] opacity-100 shadow-[0_2px_12px_rgba(251,191,36,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform
              ${isHandPickedActive ? "scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="goldGradHandPicked" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a"></stop>
                  <stop offset="50%" stopColor="#fbbf24"></stop>
                  <stop offset="100%" stopColor="#f59e0b"></stop>
                </linearGradient>
              </defs>
              <path
                d="M12 2.5a1.5 1.5 0 0 1 1 .5l1.5 1.5a1.5 1.5 0 0 0 1 .5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 0 .5 1l1.5 1.5a1.5 1.5 0 0 1 0 2l-1.5 1.5a1.5 1.5 0 0 0-.5 1v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 0-1 .5l-1.5 1.5a1.5 1.5 0 0 1-2 0l-1.5-1.5a1.5 1.5 0 0 0-1-.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 0-.5-1l-1.5-1.5a1.5 1.5 0 0 1 0-2l1.5-1.5a1.5 1.5 0 0 0 .5-1v-2A1.5 1.5 0 0 1 5.5 6h2a1.5 1.5 0 0 0 1-.5l1.5-1.5a1.5 1.5 0 0 1 1-.5z"
                stroke={isHandPickedActive ? "url(#goldGradHandPicked)" : "white"}
                strokeWidth="1.5"
              ></path>
              <polygon
                points="12 7.5 13.5 10 16.5 10.5 14 12.5 14.5 15.5 12 14 9.5 15.5 10 12.5 7.5 10.5 10.5 10"
                stroke={isHandPickedActive ? "url(#goldGradHandPicked)" : "white"}
                strokeWidth="1.5"
                fill={isHandPickedActive ? "rgba(245,158,11,0.25)" : "none"}
              ></polygon>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
              text-[0.55rem] tracking-wide
              ${
                isHandPickedActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  : "text-white/70 font-normal group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              }
            `}
          >
            Hand Picked
          </span>
          {isHandPickedActive && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)] animate-pulse"></div>
          )}
        </button>

        <div className="self-stretch flex items-center py-3 shrink-0">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-50"></div>
        </div>

        {/* Explore (formerly Video Search) */}
        <button
          type="button"
          onClick={() => handleNav("explore", `/${themeMode}/${viewMode}/explore`)}
          aria-label="Explore"
          aria-current={isExploreActive ? "page" : undefined}
          className="
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            bg-transparent border-none cursor-pointer outline-none
            transition-all duration-300 ease-out
            hover:bg-white/[0.03] active:bg-white/[0.06]
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
          "
        >
          <div
            className={`absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent transition-opacity duration-300 ${
              isExploreActive ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-b-full
              bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isExploreActive ? "w-[35%] opacity-100 shadow-[0_2px_12px_rgba(251,191,36,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform
              ${isExploreActive ? "scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            >
              <defs>
                <linearGradient id="goldGradExplore" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a"></stop>
                  <stop offset="50%" stopColor="#fbbf24"></stop>
                  <stop offset="100%" stopColor="#f59e0b"></stop>
                </linearGradient>
              </defs>
              {/* Video frame with opening for search icon */}
              <path
                d="M13 18H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"
                stroke={isExploreActive ? "url(#goldGradExplore)" : "white"}
                strokeWidth="1.5"
              ></path>
              {/* Play triangle */}
              <polygon
                points="8 7.5 8 13.5 13 10.5"
                stroke={isExploreActive ? "url(#goldGradExplore)" : "white"}
                strokeWidth="1.5"
                fill={isExploreActive ? "rgba(245,158,11,0.25)" : "none"}
              ></polygon>
              {/* Search glass */}
              <circle
                cx="17.5"
                cy="17.5"
                r="3.5"
                stroke={isExploreActive ? "url(#goldGradExplore)" : "white"}
                strokeWidth="1.5"
              ></circle>
              <path
                d="M20 20L22.5 22.5"
                stroke={isExploreActive ? "url(#goldGradExplore)" : "white"}
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
              text-[0.55rem] tracking-wide
              ${
                isExploreActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  : "text-white/70 font-normal group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              }
            `}
          >
            Explore
          </span>
          {isExploreActive && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)] animate-pulse"></div>
          )}
        </button>

        <div className="self-stretch flex items-center py-3 shrink-0">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-50"></div>
        </div>

        {/* Post Requirement */}
        <button
          type="button"
          onClick={() => handleNav("post-requirement", `/${themeMode}/${viewMode}/franchise-home`)}
          aria-label="Post Requirement"
          aria-current={isPostReqActive ? "page" : undefined}
          className="
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            bg-transparent border-none cursor-pointer outline-none
            transition-all duration-300 ease-out
            hover:bg-white/[0.03] active:bg-white/[0.06]
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
          "
        >
          <div
            className={`absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent transition-opacity duration-300 ${
              isPostReqActive ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-b-full
              bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isPostReqActive ? "w-[35%] opacity-100 shadow-[0_2px_12px_rgba(251,191,36,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform
              ${isPostReqActive ? "scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="goldGradPost" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a"></stop>
                  <stop offset="50%" stopColor="#fbbf24"></stop>
                  <stop offset="100%" stopColor="#f59e0b"></stop>
                </linearGradient>
              </defs>
              <path
                d="M14 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6"
                stroke={isPostReqActive ? "url(#goldGradPost)" : "white"}
                strokeWidth="1.5"
              ></path>
              <path
                d="M7 8h6"
                stroke={isPostReqActive ? "url(#goldGradPost)" : "white"}
                strokeWidth="1.5"
              ></path>
              <path
                d="M7 12h6"
                stroke={isPostReqActive ? "url(#goldGradPost)" : "white"}
                strokeWidth="1.5"
              ></path>
              <path
                d="M7 16h3"
                stroke={isPostReqActive ? "url(#goldGradPost)" : "white"}
                strokeWidth="1.5"
              ></path>
              <circle
                cx="17.5"
                cy="16.5"
                r="4.5"
                stroke={isPostReqActive ? "url(#goldGradPost)" : "white"}
                strokeWidth="1.5"
              ></circle>
              <path
                d="M17.5 14v5M15 16.5h5"
                stroke={isPostReqActive ? "url(#goldGradPost)" : "white"}
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
              text-[0.55rem] tracking-wide
              ${
                isPostReqActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  : "text-white/70 font-normal group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              }
            `}
          >
            Post Requirement
          </span>
          {isPostReqActive && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)] animate-pulse"></div>
          )}
        </button>
      </div>
    </nav>
  );
}
