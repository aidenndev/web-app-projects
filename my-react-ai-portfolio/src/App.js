import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav.js";
import About from "./components/about/About.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/projects/Project.js";
import Contact from "./components/contact/Contact.js";
import "./styles/app.css";
import Background from "./components/background/Background.js";

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
    </Router>
  );
};

export default App;
