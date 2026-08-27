import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import Innovations from "./pages/Innovations";
import Solutions from "./pages/Solutions";
import WhatWeDo from "./pages/WhatWeDo";
import Work from "./pages/Work";
import Careers from "./pages/Careers";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/work" element={<Work />} />
        <Route path="/careers" element={<Careers />} />

        {/* Redirect incorrect singular URL */}

        <Route
          path="/innovation"
          element={<Navigate to="/innovations" replace />}
        />

        {/* Unknown URL fallback */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;