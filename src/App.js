import { Routes, Route } from "react-router-dom";
import { Bio } from './Components/Bio';
import { About } from './Components/About';
import { Portfolio } from "./Components/Portfolio";
import { ContactMe } from "./Components/ContactMe";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <>
      <SpeedInsights />
      <Analytics/>
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </>
  );
}
export default App;
