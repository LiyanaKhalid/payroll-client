/* eslint-disable react/prop-types */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Client from "./routes/Client";
import Employee from "./routes/Employee";

const Router = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:companyId/clients/:clientId/employees/*"
            element={<Employee />}
          />
          <Route path="/:companyId/clients/*" element={<Client />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
