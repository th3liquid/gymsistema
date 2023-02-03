import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CheckInPage } from "../pages/checkin/CheckInPage";
import { ClientsPage } from "../pages/clients/ClientsPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { LoginPage } from "../pages/login/LoginPage";
import { MembresiasPage } from "../pages/membresias/MembresiasPage";
import { PagosPage } from "../pages/pagos/PagosPage";
import { SucursalesPage } from "../pages/sucursales/SucursalesPage";
import { UsuariosPage } from "../pages/usuarios/UsuariosPage";

export const RouterGym = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="checkin" element={<CheckInPage />} />
        <Route path="clientes" element={<ClientsPage />} />
        <Route path="membresias" element={<MembresiasPage />} />
        <Route path="sucursales" element={<SucursalesPage />} />
        <Route path="pagos" element={<PagosPage />} />
        <Route path="usuarios" element={<UsuariosPage />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};
