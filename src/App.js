import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Bio from './Components/Bio';
import About from './Components/About';
import Portfolio from "./Components/Portfolio";
import ContactMe from "./Components/ContactMe";

let SpeedInsights = () => null;
let Analytics = () => null;

try {
  const speedInsightsModule = require("@vercel/speed-insights/react");
  SpeedInsights = speedInsightsModule.SpeedInsights || (() => null);
} catch (error) {
  // Ignore missing optional dependency in local/test environments.
}

try {
  const analyticsModule = require("@vercel/analytics/react");
  Analytics = analyticsModule.Analytics || (() => null);
} catch (error) {
  // Ignore missing optional dependency in local/test environments.
}

function App() {
  const location = useLocation();
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Bio />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contactme" element={<ContactMe />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/*" element={<Bio />}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default App;
