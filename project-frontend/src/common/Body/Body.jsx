import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Profile } from "../../pages/Profile/Profile";
import { Register } from "../../pages/Register/Register";
import { Services } from "../../pages/Services/Services";
import { SuperAdminPanel } from "../../pages/SuperAdminPanel/SuperAdmin";
import { SuperAdminPanelServices } from "../../pages/SuperAdminPanelServices/SuperAdminPanelServices"; // Importación corregida

export const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/services" element={<Services />} />
      <Route path="/superadminpanel" element={<SuperAdminPanel />} />
      <Route path="/superadminpanelservices" element={<SuperAdminPanelServices />} />
    </Routes>
  );
};
