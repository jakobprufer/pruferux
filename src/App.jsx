import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
