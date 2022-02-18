import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "../pages/RegisterForm";
import ListUsers from "../pages/ListUsers";

export default function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/users" element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  );
}
