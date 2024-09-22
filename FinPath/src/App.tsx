import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import LearningModules from "./pages/LearningModules";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        
        {/* Main content with routing */}
        <div className="flex-grow">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/learning-modules" element={<LearningModules />} />
          </Routes>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
