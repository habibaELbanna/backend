import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './Componants/ScrollToTop';
import AdminLogin from "./Componants/Login";


const Routing = () => {
  return (
    <>
   <BrowserRouter>
        <ScrollToTop />
        <Routes>
   <Route path="/"  element={<AdminLogin />} />
    


        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;