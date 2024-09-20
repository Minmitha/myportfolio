import { Routes, Route } from "react-router-dom";
import { Bio } from './Components/Bio';
import { About } from './Components/About';
import { Portfolio } from "./Components/Portfolio";
import { ContactMe } from "./Components/ContactMe";

const App = () => {
  return (
    <>
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
