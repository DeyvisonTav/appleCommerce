import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Specifications } from "../pages/specifications";
import { Footer } from "../components/Footer";
import { Purchase } from "../pages/purchase";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specification" element={<Specifications />} />
        <Route path="/purchase" element={<Purchase />}  />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
