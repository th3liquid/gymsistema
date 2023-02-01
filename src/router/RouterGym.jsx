import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CheckInPage } from "../pages/checkin/CheckInPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { LoginPage } from "../pages/login/LoginPage";

export const RouterGym = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="checkin" element={<CheckInPage />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};
