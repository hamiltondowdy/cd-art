import React, { element } from "react";
// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} /> 
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="market" element={<Market />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;