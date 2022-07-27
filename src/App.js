import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Apps from "./components/Apps"
import Nav from "./components/Nav";

import TodoList from "./components/Apps/TodoList/TodoList";

function App() {
  return (
      <div>
          <Nav />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/apps/todo-list" element={<TodoList />} />
          </Routes>
      </div>
  );
}

export default App;
