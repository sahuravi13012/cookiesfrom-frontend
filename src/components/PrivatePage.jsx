import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

function PrivatePage() {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={<ProtectedRoute Component={Dashboard} />}
        />
        <Route path="/about" element={<ProtectedRoute Component={About} />} />
      </Routes>
    </>
  );
}

export default PrivatePage;
