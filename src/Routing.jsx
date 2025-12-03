import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './Componants/ScrollToTop';
import AdminLogin from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProjectManagement from "./Pages/Projectmanagement";
import SkillsExperience from "./Pages/Skillsexperience";
import ProfileSettings from "./Pages/Profilesettings";


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
    <Route path="/profile"  element={<ProfileSettings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;