import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "../components/RootLayout.tsx";
import Home from "../components/Home.tsx";
import Accordion from "../components/Accordion/Accordion.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="accordion" element={<Accordion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
