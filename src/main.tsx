import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import Learning from "./pages/Learning";
import "./index.css";
import OtherTools from "./pages/OtherTools";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

const Main: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/other-tools" element={<OtherTools />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Main />);
inject();
injectSpeedInsights();
