import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test.jsx";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" element={Test} />
      </Router>
    </div>
  );
}

export default App;
