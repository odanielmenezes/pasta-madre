import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/home/index";
import { SenderEmail } from "./components/form-email/component";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/orcamento" element={<SenderEmail />} />
      </Routes>
    </Router>
  );
}
