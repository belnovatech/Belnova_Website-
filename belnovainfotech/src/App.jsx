import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/about_us";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Home page WITH Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
            </>
          }
        />

        {/* ✅ About page WITHOUT Navbar */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;