import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "../RootLayout.tsx";
import Home from "../Home.tsx";
import Accordion from "../Accordion/Accordion.tsx";
import { StrictMode } from "react";
const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="accordion" element={<Accordion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
