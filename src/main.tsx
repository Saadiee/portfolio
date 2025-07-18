// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  </React.StrictMode>,
);
