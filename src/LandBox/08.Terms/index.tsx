import { useParams } from "react-router-dom";
import Mobile from "./mobile";
import Desktop from "./desktop";
export default function Index() {
  const { viewMode } = useParams<{ viewMode: "desktop" | "mobile" }>();
  return viewMode === "desktop" ? <Desktop /> : <Mobile />;
}
