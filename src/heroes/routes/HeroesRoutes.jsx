import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { Marvel, DC, SearchHeroes, HeroById } from "../pages";
import { Footer } from "../../components/Footer";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<DC />} />
          <Route path="search" element={<SearchHeroes />} />
          <Route path="hero/:id" element={<HeroById />} />
          <Route path="/*" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
