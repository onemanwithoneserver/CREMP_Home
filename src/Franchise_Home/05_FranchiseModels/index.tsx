import FranchiseModelsDesktop from "./05_FranchiseModelsDesktop";
import FranchiseModelsMobile from "./05_FranchiseModelsMobile";

export default function FranchiseModels({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <FranchiseModelsMobile /> : <FranchiseModelsDesktop />;
}
