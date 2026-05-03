// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// // import "./App.css";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//     </div>
//   );
// };





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/about_us";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>

      {/* Navbar only on Home */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Hero />
            </>
          } 
        />

        {/* About page (no navbar) */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {/* Footer for all pages */}
      <Footer />

    </Router>
  );
};

export default App;