import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
      <div className="bg-gradient-to-r from-slate-600 to-slate-800">
          <Nav />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </div>
  );
}

export default App;
