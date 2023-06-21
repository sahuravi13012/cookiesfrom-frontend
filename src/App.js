import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivatePage from "./components/PrivatePage";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import About from "./pages/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={<ProtectedRoute Component={PrivatePage} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </>
  );
}

export default App;
