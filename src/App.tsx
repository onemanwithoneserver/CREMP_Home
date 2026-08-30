import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import BuyersAndSellers from "./BuyersAndSellers";
import MobileViewport from "./components/commonfiles/MobileViewport";
import Header, { type ViewMode } from "./components/Header";
import { PageTransition } from "./components/layout";
import DeveloperAndOwner from "./DeveloperAndOwner";
import Filters from "./Filters";
import Franchise from "./Franchise";
import FranchiseHome from "./Franchise_Home";
import FranchiseHome01 from "./Franchise_Home_01";
import Home from "./Home";
import Investors from "./Investors";
import BuildingBox from "./BuildingBox";
import AllBuildingBox from "./AllBuildingBox";
import LandBox from "./LandBox";
import FranchiseSearchResults from "./Franchise_Search results";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import VideoSearch from "./videoSearch";
import BuySearchResults from "./Buy Search results";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const pathParts = location.pathname.split("/").filter(Boolean);
  const themeMode = pathParts[0] === "light" ? "light" : "dark";
  const viewMode: ViewMode = pathParts[1] === "mobile" ? "mobile" : "desktop";
  const isMobile = viewMode === "mobile";
  const handleViewModeChange = (newMode: ViewMode) => {
    const page = pathParts[2] || "home";
    navigate(`/${themeMode}/${newMode}/${page}`);
  };
  const handleClose = () => {
    setShowHeader(false);
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "m") {
        e.preventDefault();
        setShowHeader((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className="flex flex-col h-screen w-full bg-cremp-background" style={{ "--top-bar-height": showHeader ? "56px" : "0px" } as React.CSSProperties}>
      {showHeader && (
        <Header
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          onClose={handleClose}
          showViewControls={true}
        />
      )}
      <div className="flex-1 overflow-hidden relative z-10">
        <MobileViewport isMobile={isMobile}>
          <PageTransition
            motionKey={location.pathname}
            className="h-full w-full"
          >
            <Routes location={location}>
              <Route
                path="/:themeMode/:viewMode/home"
                element={<Home isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/franchise"
                element={<Franchise isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/investors"
                element={<Investors isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/buyers-and-sellers"
                element={<BuyersAndSellers isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/developer-and-owner"
                element={<DeveloperAndOwner isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/franchise-home"
                element={<FranchiseHome isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/franchise-home-01"
                element={<FranchiseHome01 isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/filters"
                element={<Filters isMobile={isMobile} />}
              />
              <Route path="/:themeMode/:viewMode/building-box" element={<BuildingBox />} />
              <Route
                path="/:themeMode/:viewMode/all-building-box"
                element={<AllBuildingBox />}
              />
              <Route path="/:themeMode/:viewMode/land-box" element={<LandBox />} />
              <Route
                path="/:themeMode/:viewMode/franchise-search-results"
                element={<FranchiseSearchResults isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/login"
                element={<Login isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/create-account"
                element={<CreateAccount isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/buy-search-results"
                element={<BuySearchResults isMobile={isMobile} />}
              />
              <Route
                path="/:themeMode/:viewMode/video-search"
                element={<VideoSearch isMobile={isMobile} />}
              />
              <Route
                path="*"
                element={<Navigate to="/light/desktop/home" replace />}
              />
            </Routes>
          </PageTransition>
        </MobileViewport>
      </div>
    </div>
  );
}
export default App;
