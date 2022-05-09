import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import PricingPage from "./components/PricingPage";
import PricingPage2 from "./components/PricingPage2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="pricing2" element={<PricingPage2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
