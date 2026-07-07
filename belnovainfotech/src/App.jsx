import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Footer from "./components/footer";
import Services from "./pages/Services";
import WhyBelnova from "./pages/WhyBelnova";
const Home = () => (
  <>
    <Navbar />
    <Hero />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Services Page */} 
       <Route path="/services" element={<Services />} />

        {/* Why Belnova Page */}
        <Route path="/why-belnova" element={<WhyBelnova />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;