import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './Componants/ScrollToTop';
import AdminLogin from "./Pages/Login";
import Dashboard from "./Componants/Dashboard";
import ProjectManagement from "./Pages/Projectmanagement";


const Routing = () => {
  return (
    <>
   <BrowserRouter>
        <ScrollToTop />
        <Routes>
   <Route path="/"  element={<AdminLogin />} />
     <Route path="/dashboard"  element={<Dashboard />} />
  <Route path="/projectmanagment"  element={<ProjectManagement />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;