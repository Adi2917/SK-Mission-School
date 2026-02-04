import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Admission from "./Pages/Admission";
import Academics from "./Pages/Academics";
import Facilities from "./Pages/Facilities";
import Contact from "./Pages/Contact"

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 MAGIC LINE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
