import { useParams } from "react-router-dom";
import Desktop from "./desktop";
import Mobile from "./mobile";
export default function SpaceOverview() {
  const { viewMode } = useParams<{ viewMode: "desktop" | "mobile" }>();
  return viewMode === "mobile" ? <Mobile /> : <Desktop />;
}
