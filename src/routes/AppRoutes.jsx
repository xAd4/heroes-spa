import { Routes, Route } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HeroesRoutes />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};
