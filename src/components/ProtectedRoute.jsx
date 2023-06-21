import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { Component } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/checktoken", { withCredentials: true })
      .then(() => {
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{isAuthenticated ? <Component /> : <Navigate to="/" />}</>;
}

export default ProtectedRoute;
