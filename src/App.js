import { Routes, Route, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { AnimatePresence } from "framer-motion";
import Bio from './Components/Bio';
import About from './Components/About';
import Portfolio from "./Components/Portfolio";
import ContactMe from "./Components/ContactMe";
import Navbar from "./Components/Navbar";

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
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default App;
