import { useState, useEffect } from "react";
import logo from "../Logo/CREMP.png";
import logoLight from "../Logo/CREMP_Light.png";

export interface MobileStickyFooterProps {
  activeTab?: "home" | "explore" | "saved" | "hire-broker" | "hand-picked" | "post-requirement" | string;
  onTabChange?: (tab: string) => void;
}

export default function MobileStickyFooter({
  activeTab = "explore",
  onTabChange,
}: MobileStickyFooterProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handleNav = (tab: string) => {
    setCurrentTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const isHomeActive = currentTab === "home";
  const isExploreActive = currentTab === "explore";
  const isSavedActive = currentTab === "saved";
  const isHireBrokerActive = currentTab === "hire-broker";
  const isHandPickedActive = currentTab === "hand-picked";
  const isPostReqActive = currentTab === "post-requirement";

  const dividerClass = "self-stretch flex items-center py-2.5 shrink-0";
  const dividerInnerClass =
    "w-px h-6 bg-gradient-to-b from-transparent via-white/15 to-transparent";

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="
        relative left-0 right-0 z-50
        flex flex-col w-full overflow-hidden
        bg-[#0b1b42]/95 backdrop-blur-2xl
        border-t border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.6)]
        select-none font-['Outfit',sans-serif]
      "
    >
      {/* Top golden accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div className="flex items-stretch w-full relative px-0.5 py-0.5">
        {/* 1. CREMP Home Logo */}
        <button
          type="button"
          onClick={() => handleNav("home")}
          className={`
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            rounded-[4px] cursor-pointer outline-none
            transition-all duration-300 ease-out
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
            ${
              isHomeActive
                ? "bg-[#d4af37]/15 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                : "bg-transparent hover:bg-white/5 text-white/70 hover:text-white"
            }
          `}
          aria-label="Go to CREMP home"
        >
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-b-full
              bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728]
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isHomeActive ? "w-[40%] opacity-100 shadow-[0_2px_12px_rgba(212,175,55,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div className="w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              alt="CREMP Logo"
              src={logo}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== logoLight) {
                  target.src = logoLight;
                }
              }}
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
            />
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-300 text-[0.55rem] tracking-wider uppercase
              ${
                isHomeActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-300 to-amber-500 bg-clip-text text-transparent font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                  : "font-semibold text-white/90 group-hover:text-white"
              }
            `}
          >
            CREMP
          </span>
          {isHomeActive && (
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_6px_rgba(212,175,55,0.9)] animate-pulse"></div>
          )}
        </button>

        <div className={dividerClass}>
          <div className={dividerInnerClass}></div>
        </div>

        {/* 2. Explore (Beside the Logo) */}
        <button
          type="button"
          onClick={() => handleNav("explore")}
          aria-label="Explore"
          aria-current={isExploreActive ? "page" : undefined}
          className={`
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            rounded-[4px] cursor-pointer outline-none
            transition-all duration-300 ease-out
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
            ${
              isExploreActive
                ? "bg-[#d4af37]/15 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                : "bg-transparent hover:bg-white/5 text-white/70 hover:text-white"
            }
          `}
        >
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-b-full
              bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728]
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isExploreActive ? "w-[40%] opacity-100 shadow-[0_2px_12px_rgba(212,175,55,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-300 ease-out will-change-transform
              ${isExploreActive ? "scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] text-[#d4af37]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105 text-white/70 group-hover:text-white"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="goldGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a"></stop>
                  <stop offset="50%" stopColor="#fbbf24"></stop>
                  <stop offset="100%" stopColor="#f59e0b"></stop>
                </linearGradient>
              </defs>
              <path d="M13 18H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"></path>
              <polygon
                points="8 7.5 8 13.5 13 10.5"
                fill={isExploreActive ? "rgba(212,175,55,0.3)" : "none"}
              ></polygon>
              <circle cx="17.5" cy="17.5" r="3.5"></circle>
              <path d="M20 20L22.5 22.5"></path>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-300 text-[0.55rem] tracking-wide
              ${
                isExploreActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-300 to-amber-500 bg-clip-text text-transparent font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                  : "font-medium text-white/70 group-hover:text-white"
              }
            `}
          >
            Explore
          </span>
          {isExploreActive && (
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_6px_rgba(212,175,55,0.9)] animate-pulse"></div>
          )}
        </button>

        <div className={dividerClass}>
          <div className={dividerInnerClass}></div>
        </div>

        {/* 3. Saved */}
        <button
          type="button"
          onClick={() => handleNav("saved")}
          aria-label="Saved"
          aria-current={isSavedActive ? "page" : undefined}
          className={`
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            rounded-[4px] cursor-pointer outline-none
            transition-all duration-300 ease-out
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
            ${
              isSavedActive
                ? "bg-[#d4af37]/15 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                : "bg-transparent hover:bg-white/5 text-white/70 hover:text-white"
            }
          `}
        >
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-b-full
              bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728]
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isSavedActive ? "w-[40%] opacity-100 shadow-[0_2px_12px_rgba(212,175,55,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-300 ease-out will-change-transform
              ${isSavedActive ? "scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] text-[#d4af37]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105 text-white/70 group-hover:text-white"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-300 ${isSavedActive ? "fill-[#d4af37]/30 text-[#d4af37]" : "fill-transparent text-current"}`}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-300 text-[0.55rem] tracking-wide
              ${
                isSavedActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-300 to-amber-500 bg-clip-text text-transparent font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                  : "font-medium text-white/70 group-hover:text-white"
              }
            `}
          >
            Saved
          </span>
          {isSavedActive && (
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_6px_rgba(212,175,55,0.9)] animate-pulse"></div>
          )}
        </button>

        <div className={dividerClass}>
          <div className={dividerInnerClass}></div>
        </div>

        {/* 4. Hire Broker */}
        <button
          type="button"
          onClick={() => handleNav("hire-broker")}
          aria-label="Hire Broker"
          aria-current={isHireBrokerActive ? "page" : undefined}
          className={`
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            rounded-[4px] cursor-pointer outline-none
            transition-all duration-300 ease-out
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
            ${
              isHireBrokerActive
                ? "bg-[#d4af37]/15 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                : "bg-transparent hover:bg-white/5 text-white/70 hover:text-white"
            }
          `}
        >
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-b-full
              bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728]
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isHireBrokerActive ? "w-[40%] opacity-100 shadow-[0_2px_12px_rgba(212,175,55,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-300 ease-out will-change-transform
              ${isHireBrokerActive ? "scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] text-[#d4af37]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105 text-white/70 group-hover:text-white"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="10" cy="7" r="4.5"></circle>
              <path d="M3 21v-2a6 6 0 0 1 8-5.5"></path>
              <circle cx="17.5" cy="16.5" r="3.5"></circle>
              <path d="M17.5 16.5v.01"></path>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-300 text-[0.55rem] tracking-wide
              ${
                isHireBrokerActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-300 to-amber-500 bg-clip-text text-transparent font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                  : "font-medium text-white/70 group-hover:text-white"
              }
            `}
          >
            Hire Broker
          </span>
          {isHireBrokerActive && (
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_6px_rgba(212,175,55,0.9)] animate-pulse"></div>
          )}
        </button>

        <div className={dividerClass}>
          <div className={dividerInnerClass}></div>
        </div>

        {/* 5. Hand Picked */}
        <button
          type="button"
          onClick={() => handleNav("hand-picked")}
          aria-label="Hand Picked"
          aria-current={isHandPickedActive ? "page" : undefined}
          className={`
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            rounded-[4px] cursor-pointer outline-none
            transition-all duration-300 ease-out
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
            ${
              isHandPickedActive
                ? "bg-[#d4af37]/15 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                : "bg-transparent hover:bg-white/5 text-white/70 hover:text-white"
            }
          `}
        >
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-b-full
              bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728]
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isHandPickedActive ? "w-[40%] opacity-100 shadow-[0_2px_12px_rgba(212,175,55,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-300 ease-out will-change-transform
              ${isHandPickedActive ? "scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] text-[#d4af37]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105 text-white/70 group-hover:text-white"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2.5a1.5 1.5 0 0 1 1 .5l1.5 1.5a1.5 1.5 0 0 0 1 .5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 0 .5 1l1.5 1.5a1.5 1.5 0 0 1 0 2l-1.5 1.5a1.5 1.5 0 0 0-.5 1v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 0-1 .5l-1.5 1.5a1.5 1.5 0 0 1-2 0l-1.5-1.5a1.5 1.5 0 0 0-1-.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 0-.5-1l-1.5-1.5a1.5 1.5 0 0 1 0-2l1.5-1.5a1.5 1.5 0 0 0 .5-1v-2A1.5 1.5 0 0 1 5.5 6h2a1.5 1.5 0 0 0 1-.5l1.5-1.5a1.5 1.5 0 0 1 1-.5z"></path>
              <polygon
                points="12 7.5 13.5 10 16.5 10.5 14 12.5 14.5 15.5 12 14 9.5 15.5 10 12.5 7.5 10.5 10.5 10"
                fill={isHandPickedActive ? "rgba(212,175,55,0.3)" : "none"}
              ></polygon>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-300 text-[0.55rem] tracking-wide
              ${
                isHandPickedActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-300 to-amber-500 bg-clip-text text-transparent font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                  : "font-medium text-white/70 group-hover:text-white"
              }
            `}
          >
            Hand Picked
          </span>
          {isHandPickedActive && (
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_6px_rgba(212,175,55,0.9)] animate-pulse"></div>
          )}
        </button>

        <div className={dividerClass}>
          <div className={dividerInnerClass}></div>
        </div>

        {/* 6. Post Requirement */}
        <button
          type="button"
          onClick={() => handleNav("post-requirement")}
          aria-label="Post Requirement"
          aria-current={isPostReqActive ? "page" : undefined}
          className={`
            relative group flex flex-1 min-w-0 flex-col items-center justify-center
            gap-1 py-2 px-0.5
            rounded-[4px] cursor-pointer outline-none
            transition-all duration-300 ease-out
            [-webkit-tap-highlight-color:transparent]
            overflow-hidden
            ${
              isPostReqActive
                ? "bg-[#d4af37]/15 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                : "bg-transparent hover:bg-white/5 text-white/70 hover:text-white"
            }
          `}
        >
          <div
            className={`
              absolute top-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-b-full
              bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728]
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isPostReqActive ? "w-[40%] opacity-100 shadow-[0_2px_12px_rgba(212,175,55,0.9)]" : "w-0 opacity-0"}
            `}
          ></div>
          <div
            className={`
              flex items-center justify-center shrink-0 w-6 h-6
              transition-all duration-300 ease-out will-change-transform
              ${isPostReqActive ? "scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] text-[#d4af37]" : "scale-100 group-hover:-translate-y-0.5 group-hover:scale-105 text-white/70 group-hover:text-white"}
            `}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6"></path>
              <path d="M7 8h6"></path>
              <path d="M7 12h6"></path>
              <path d="M7 16h3"></path>
              <circle cx="17.5" cy="16.5" r="4.5"></circle>
              <path d="M17.5 14v5M15 16.5h5"></path>
            </svg>
          </div>
          <span
            className={`
              block w-full text-center leading-tight whitespace-pre-wrap
              transition-all duration-300 text-[0.55rem] tracking-wide
              ${
                isPostReqActive
                  ? "bg-gradient-to-r from-yellow-200 via-amber-300 to-amber-500 bg-clip-text text-transparent font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                  : "font-medium text-white/70 group-hover:text-white"
              }
            `}
          >
            Post Requirement
          </span>
          {isPostReqActive && (
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_6px_rgba(212,175,55,0.9)] animate-pulse"></div>
          )}
        </button>
      </div>
    </nav>
  );
}