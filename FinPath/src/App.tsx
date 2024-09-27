import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import LearningModules from "./pages/LearningModules"; // This will be similar to Dashboard/Profile

const App: React.FC = () => {
  return (
    <Router>
      {/* <div className="flex flex-col min-h-screen"> */}
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/learning-modules" element={<LearningModules />} />
        </Routes>
      </main>
      <Footer />
      {/* </div> */}
    </Router>
  );
};

export default App;
