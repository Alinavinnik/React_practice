import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "../RootLayout.tsx";
import Home from "../Home.tsx";
import Accordion from "../Accordion/Accordion.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsPagination from "../ProductsPagination/ProductsPagination.tsx";
import VideoPlayer from "../VideoPlayer.tsx";
import { StrictMode } from "react";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="accordion" element={<Accordion />} />
              <Route path="products" element={<ProductsPagination />}></Route>
              <Route path="player" element={<VideoPlayer />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
