import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './Componants/ScrollToTop';
import AdminLogin from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProjectManagement from "./Pages/Projectmanagement";
import SkillsExperience from "./Pages/Skillsexperience";
import ProfileSettings from "./Pages/Profilesettings";
import Messages from './Pages/Messages';
import Content from './Pages/Content';


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
       <Route path="/messages"  element={<Messages />} />
        <Route path="/content"  element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;