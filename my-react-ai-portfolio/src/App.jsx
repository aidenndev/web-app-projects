import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Project.jsx";
import Contact from "./components/contact/Contact.jsx";
import "./styles/app.css";
import Background from "./components/background/Background.jsx";
import Stats from "./components/stats/Stats.jsx"

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Stats />
    </Router>
  );
};

export default App;
