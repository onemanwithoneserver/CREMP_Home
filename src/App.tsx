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
import Home from "./Home";
import Investors from "./Investors";
import BuildingBox from "./BuildingBox";
import AllBuildingBox from "./AllBuildingBox";
import LandBox from "./LandBox";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);

  const pathParts = location.pathname.split("/").filter(Boolean);
  const viewMode: ViewMode = pathParts[0] === "mobile" ? "mobile" : "desktop";
  const isMobile = viewMode === "mobile";

  const handleViewModeChange = (newMode: ViewMode) => {
    const page = pathParts[1] || "home";
    navigate(`/${newMode}/${page}`);
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
    <div className="flex flex-col h-screen w-full bg-cremp-background">
      {showHeader && (
        <Header
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          onClose={handleClose}
          showViewControls={pathParts[1] !== "building-box" && pathParts[1] !== "land-box" && pathParts[1] !== "all-building-box"}
        />
      )}

      <div className="flex-1 overflow-hidden relative z-10">
        <MobileViewport isMobile={isMobile}>
          <PageTransition motionKey={location.pathname}>
            <Routes location={location}>
              <Route
                path="/:viewMode/home"
                element={<Home isMobile={isMobile} />}
              />
              <Route
                path="/:viewMode/franchise"
                element={<Franchise isMobile={isMobile} />}
              />
              <Route
                path="/:viewMode/investors"
                element={<Investors isMobile={isMobile} />}
              />
              <Route
                path="/:viewMode/buyers-and-sellers"
                element={<BuyersAndSellers isMobile={isMobile} />}
              />
              <Route
                path="/:viewMode/developer-and-owner"
                element={<DeveloperAndOwner isMobile={isMobile} />}
              />
              <Route
                path="/:viewMode/franchise-home"
                element={<FranchiseHome isMobile={isMobile} />}
              />
              <Route
                path="/:viewMode/filters"
                element={<Filters isMobile={isMobile} />}
              />
              <Route
                path="/desktop/building-box"
                element={<Navigate to="/mobile/building-box" replace />}
              />
              <Route path="/mobile/building-box" element={<BuildingBox />} />
              <Route path="/mobile/all-building-box" element={<AllBuildingBox />} />
              <Route
                path="/desktop/land-box"
                element={<Navigate to="/mobile/land-box" replace />}
              />
              <Route path="/mobile/land-box" element={<LandBox />} />
              <Route
                path="*"
                element={<Navigate to="/desktop/home" replace />}
              />
            </Routes>
          </PageTransition>
        </MobileViewport>
      </div>
    </div>
  );
}

export default App;
