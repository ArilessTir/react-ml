import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Prediction from "./pages/Prediction";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prediction" element={<Prediction />} />
    </Routes>
  </BrowserRouter>
);

export default App;
