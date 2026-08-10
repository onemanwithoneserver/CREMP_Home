import Hero from "./01.Hero";
import CommercialTerms from "./02.CommercialTerms";
import SpaceOverview from "./03.SpaceOverview";
import FitOut from "./04.FitOut";
import Infrastructure from "./05.Infrastructure";
import Media from "./06.Media";
import LocationIntelligence from "./07.LocationIntelligence";
import Terms from "./08.Terms";
import StickyFooter from "./StickyFooter";

export default function BuildingBox() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-50 dark:bg-[#0b1b42] text-gray-900 dark:text-white transition-colors duration-300 pb-20">
            <Hero />
            <CommercialTerms />
            <SpaceOverview />
            <FitOut />
            <Infrastructure />
            <Media />
            <LocationIntelligence />
            <Terms />
            <StickyFooter />
        </div>
    );
}
