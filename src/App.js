import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
