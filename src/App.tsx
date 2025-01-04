import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import LoanManagement from "./pages/LoanManagement";
import TransactionHistory from "./pages/TransactionHistory";

const App: React.FC = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/loans" element={<LoanManagement />} />
          <Route path="/transactions" element={<TransactionHistory />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
