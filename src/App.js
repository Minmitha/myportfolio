import { Routes, Route } from "react-router-dom";
import { Bio } from './Components/Bio';
import { About } from './Components/About';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
