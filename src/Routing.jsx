import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './Componants/ScrollToTop';
import AdminLogin from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProjectManagement from "./Pages/Projectmanagement";
import SkillsExperience from "./Pages/Skillsexperience";


const Routing = () => {
  return (
    <>
   <BrowserRouter>
        <ScrollToTop />
        <Routes>
   <Route path="/"  element={<AdminLogin />} />
     <Route path="/dashboard"  element={<Dashboard />} />
  <Route path="/projectmanagment"  element={<ProjectManagement />} />
  <Route path="/skillsandexperiance"  element={<SkillsExperience />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;